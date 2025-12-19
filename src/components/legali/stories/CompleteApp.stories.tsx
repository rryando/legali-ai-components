import type { Meta } from "@storybook/react";
import { ClipboardList, FileText, Scale, Search } from "lucide-react";
import { useState } from "react";
import { legaliDemoModules, legaliDemoQuiz } from "../data/legali-demo-content";
import { HomeScreen } from "../screens/HomeScreen";
import { QuizScreen } from "../screens/QuizScreen";
import { ResultsScreen } from "../screens/ResultsScreen";
import { ReviewScreen } from "../screens/ReviewScreen";

const meta: Meta = {
  title: "Legali/Demo/Complete App",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type LucideIcon = typeof FileText;

const moduleIconMap: Record<string, LucideIcon> = {
  "module-1": FileText,
  "module-2": Search,
  "module-3": Scale,
  "module-4": ClipboardList,
};

// --- Persistence Logic ---

const STORAGE_KEY = "legali-demo-progress";

interface UserProgress {
  xp: number;
  streak: number;
  lastLoginDate: string;
  completedLessons: string[];
  unlockedModules: string[];
}

const INITIAL_PROGRESS: UserProgress = {
  xp: 1250,
  streak: 5,
  lastLoginDate: new Date().toISOString().split("T")[0],
  completedLessons: [],
  unlockedModules: ["module-1"],
};

const loadProgress = (): UserProgress => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...INITIAL_PROGRESS, ...parsed };
    }
  } catch (e) {
    console.error("Failed to load progress", e);
  }
  return INITIAL_PROGRESS;
};

const saveProgress = (progress: UserProgress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error("Failed to save progress", e);
  }
};

type Screen = "home" | "quiz" | "results" | "review";

export const CompleteApp = () => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window !== "undefined") {
      const loaded = loadProgress();
      // Streak logic
      const today = new Date().toISOString().split("T")[0];
      const lastLogin = loaded.lastLoginDate;

      let newStreak = loaded.streak;
      if (lastLogin !== today) {
        const yesterday = new Date(Date.now() - 86_400_000)
          .toISOString()
          .split("T")[0];
        if (lastLogin !== yesterday) {
          newStreak = 0; // Reset if missed a day
        }
      }
      return { ...loaded, streak: newStreak };
    }
    return INITIAL_PROGRESS;
  });

  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [selectedModuleId, setSelectedModuleId] = useState<string>(
    legaliDemoModules[0]?.id ?? "module-1"
  );
  const [quizScore, setQuizScore] = useState({ score: 0, total: 0 });
  const [userAnswers, setUserAnswers] = useState<
    Record<string | number, string | number>
  >({});
  const [earnedXp, setEarnedXp] = useState(0);

  const selectedModule =
    legaliDemoModules.find((module) => module.id === selectedModuleId) ??
    legaliDemoModules[0];
  // In a real app, we'd select the specific lesson. For this demo, we assume the first lesson of the module.
  const featuredLesson = selectedModule?.lessons?.[0];
  const quizQuestions = featuredLesson?.quiz ?? legaliDemoQuiz;

  const handleModuleClick = (moduleId: string | number) => {
    const mId = String(moduleId);
    if (!progress.unlockedModules.includes(mId)) return; // Locked

    setSelectedModuleId(mId);
    setCurrentScreen("quiz");
  };

  const handleQuizComplete = (
    score: number,
    total: number,
    answers: Record<string | number, string | number>
  ) => {
    const xp = score * 10 + 20;
    setEarnedXp(xp);
    setQuizScore({ score, total });
    setUserAnswers(answers);

    // Update Progress
    const newProgress = { ...progress };
    newProgress.xp += xp;

    // Update Streak
    const today = new Date().toISOString().split("T")[0];
    if (newProgress.lastLoginDate !== today) {
      newProgress.streak += 1;
      newProgress.lastLoginDate = today;
    } else if (progress.streak === 0) {
      newProgress.streak = 1; // First activity of the day if streak was broken
      newProgress.lastLoginDate = today;
    }

    // Mark Lesson Completed
    if (
      featuredLesson &&
      !newProgress.completedLessons.includes(featuredLesson.id)
    ) {
      newProgress.completedLessons.push(featuredLesson.id);
    }

    // Check Module Completion & Unlock Next
    const currentModuleIndex = legaliDemoModules.findIndex(
      (m) => m.id === selectedModuleId
    );
    if (currentModuleIndex !== -1) {
      const nextModule = legaliDemoModules[currentModuleIndex + 1];
      if (nextModule && !newProgress.unlockedModules.includes(nextModule.id)) {
        newProgress.unlockedModules.push(nextModule.id);
      }
    }

    setProgress(newProgress);
    saveProgress(newProgress);
    setCurrentScreen("results");
  };

  const handleQuizClose = () => {
    setCurrentScreen("home");
  };

  const handleContinue = () => {
    setCurrentScreen("home");
  };

  const handleReviewMistakes = () => {
    setCurrentScreen("review");
  };

  const handleReviewClose = () => {
    setCurrentScreen("results");
  };

  // Compute Home Modules based on progress
  const homeModules = legaliDemoModules.map((module) => {
    const Icon = moduleIconMap[module.id] ?? FileText;
    const isUnlocked = progress.unlockedModules.includes(module.id);

    // For demo purposes, if the first lesson is completed, we might want to show the module as completed
    // if we can't navigate to others. But let's stick to the data.
    // If the user can only take one quiz, they can only complete one lesson.
    // So let's relax the "completed" check for the demo: if the *featured* lesson (first one) is done, mark module as completed.
    const isFeaturedLessonCompleted =
      module.lessons.length > 0 &&
      progress.completedLessons.includes(module.lessons[0].id);

    let status: "locked" | "current" | "completed" = "locked";
    if (isFeaturedLessonCompleted) status = "completed";
    else if (isUnlocked) status = "current";

    return {
      id: module.id,
      icon: <Icon className="h-full w-full p-3" />,
      title: module.title,
      subtitle: module.subtitle,
      mascotCopy: module.mascotCopy,
      status,
      lessons: module.lessons.map((lesson) => ({
        id: lesson.id,
        completed: progress.completedLessons.includes(lesson.id),
      })),
    };
  });

  return (
    <>
      {currentScreen === "home" && (
        <HomeScreen
          modules={homeModules}
          onModuleClick={handleModuleClick}
          points={progress.xp}
          streak={progress.streak}
        />
      )}
      {currentScreen === "quiz" && (
        <QuizScreen
          onClose={handleQuizClose}
          onQuizComplete={handleQuizComplete}
          questions={quizQuestions}
        />
      )}
      {currentScreen === "results" && (
        <ResultsScreen
          badgeTitle={featuredLesson?.badge ?? "Legali Badge Earned!"}
          onContinue={handleContinue}
          onReviewMistakes={handleReviewMistakes}
          score={quizScore.score}
          streak={progress.streak}
          totalQuestions={quizScore.total}
          xpEarned={earnedXp}
        />
      )}
      {currentScreen === "review" && (
        <ReviewScreen
          onClose={handleReviewClose}
          questions={quizQuestions}
          userAnswers={userAnswers}
        />
      )}
    </>
  );
};
