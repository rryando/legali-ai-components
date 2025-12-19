import type { Meta, StoryObj } from "@storybook/react";
import { useCallback, useState } from "react";
import {
  LegaliMascot,
  MascotMotion,
  MascotMotionLabels,
  type MascotMotionType,
} from "../mascot";

/**
 * Interactive Playground Component
 * Allows users to control and experiment with all mascot animations
 */
function MascotPlayground() {
  const [motion, setMotion] = useState<MascotMotionType>(MascotMotion.IDLE);
  const [isBlink, setIsBlink] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const motionButtons = Object.entries(MascotMotion).map(([key, value]) => ({
    key,
    value: value as MascotMotionType,
    label: MascotMotionLabels[value as MascotMotionType],
  }));

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🎭 Mascot Animation Playground</h1>
        <p style={styles.subtitle}>
          Interact with the Legali mascot and explore all available animations
        </p>
      </div>

      <div style={styles.content}>
        {/* Animation Display */}
        <div style={styles.animationSection}>
          <div style={styles.animationContainer}>
            <LegaliMascot
              height={350}
              isBlink={isBlink}
              motion={motion}
              onLoad={handleLoad}
              width={350}
            />
            {!isLoaded && (
              <div style={styles.loadingOverlay}>
                <div style={styles.loadingSpinner} />
                <span>Loading animation...</span>
              </div>
            )}
          </div>

          <div style={styles.currentState}>
            <span style={styles.stateLabel}>Current Motion:</span>
            <span style={styles.stateValue}>{MascotMotionLabels[motion]}</span>
          </div>
        </div>

        {/* Controls Panel */}
        <div style={styles.controlsSection}>
          {/* Blink Toggle */}
          <div style={styles.controlGroup}>
            <h3 style={styles.controlTitle}>👁️ Blink Control</h3>
            <button
              onClick={() => setIsBlink(!isBlink)}
              style={{
                ...styles.toggleButton,
                ...(isBlink ? styles.toggleActive : styles.toggleInactive),
              }}
            >
              {isBlink ? "✓ Blinking Enabled" : "✗ Blinking Disabled"}
            </button>
          </div>

          {/* Motion Buttons */}
          <div style={styles.controlGroup}>
            <h3 style={styles.controlTitle}>🎬 Motion States</h3>
            <div style={styles.motionGrid}>
              {motionButtons.map(({ key, value, label }) => (
                <button
                  key={key}
                  onClick={() => setMotion(value)}
                  style={{
                    ...styles.motionButton,
                    ...(motion === value ? styles.motionButtonActive : {}),
                  }}
                >
                  <span style={styles.motionIcon}>{getMotionIcon(key)}</span>
                  <span style={styles.motionLabel}>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div style={styles.controlGroup}>
            <h3 style={styles.controlTitle}>⚡ Quick Actions</h3>
            <div style={styles.quickActions}>
              <button
                onClick={() => {
                  const motions = Object.values(
                    MascotMotion
                  ) as MascotMotionType[];
                  const randomMotion =
                    motions[Math.floor(Math.random() * motions.length)];
                  setMotion(randomMotion);
                }}
                style={styles.actionButton}
              >
                🎲 Random Motion
              </button>
              <button
                onClick={() => {
                  setMotion(MascotMotion.IDLE);
                  setIsBlink(true);
                }}
                style={styles.actionButton}
              >
                🔄 Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div style={styles.infoPanel}>
        <h4 style={styles.infoTitle}>💡 Tips</h4>
        <ul style={styles.infoList}>
          <li>Click any motion button to see the mascot animate</li>
          <li>Toggle blinking on/off to control the blink animation</li>
          <li>Try the random button for surprise animations!</li>
        </ul>
      </div>
    </div>
  );
}

// Motion icons mapping
function getMotionIcon(motion: string): string {
  const icons: Record<string, string> = {
    EXIT: "👋",
    NORMAL: "😊",
    LAPTOP: "💻",
    WRITING: "✍️",
    IDLE: "😌",
    THINKING: "🤔",
    CRYING: "😢",
    SPEAKING: "🗣️",
    CONFUSED: "😕",
    WAVING: "🙋",
    SHRUG: "🤷",
    CELEBRATE: "🎉",
    SCHEDULED: "📅",
    IDEA: "💡",
    READING: "📖",
    THROPHY: "🏆",
    THUMBSUP: "👍",
  };
  return icons[motion] || "🎭";
}

// Styles
const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    maxWidth: "900px",
    margin: "0 auto",
    padding: "24px",
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    borderRadius: "20px",
    color: "#fff",
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
  },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    margin: "0 0 8px 0",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subtitle: {
    fontSize: "14px",
    color: "#a0aec0",
    margin: 0,
  },
  content: {
    display: "flex",
    gap: "32px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  animationSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
  animationContainer: {
    position: "relative",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  loadingOverlay: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(26, 26, 46, 0.9)",
    borderRadius: "20px",
    gap: "12px",
    color: "#a0aec0",
  },
  loadingSpinner: {
    width: "40px",
    height: "40px",
    border: "3px solid rgba(255, 255, 255, 0.1)",
    borderTopColor: "#667eea",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  currentState: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    background: "rgba(102, 126, 234, 0.2)",
    borderRadius: "20px",
    border: "1px solid rgba(102, 126, 234, 0.3)",
  },
  stateLabel: {
    fontSize: "12px",
    color: "#a0aec0",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  stateValue: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#667eea",
  },
  controlsSection: {
    flex: 1,
    minWidth: "280px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  controlGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  controlTitle: {
    fontSize: "14px",
    fontWeight: 600,
    margin: 0,
    color: "#e2e8f0",
  },
  toggleButton: {
    padding: "12px 20px",
    borderRadius: "12px",
    border: "none",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  toggleActive: {
    background: "linear-gradient(135deg, #48bb78 0%, #38a169 100%)",
    color: "#fff",
  },
  toggleInactive: {
    background: "rgba(255, 255, 255, 0.1)",
    color: "#a0aec0",
  },
  motionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "8px",
  },
  motionButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    padding: "12px 8px",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    color: "#e2e8f0",
  },
  motionButtonActive: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    border: "1px solid rgba(102, 126, 234, 0.5)",
    color: "#fff",
    transform: "scale(1.05)",
  },
  motionIcon: {
    fontSize: "20px",
  },
  motionLabel: {
    fontSize: "11px",
    fontWeight: 500,
  },
  quickActions: {
    display: "flex",
    gap: "8px",
  },
  actionButton: {
    flex: 1,
    padding: "12px 16px",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    color: "#e2e8f0",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  infoPanel: {
    marginTop: "24px",
    padding: "16px 20px",
    background: "rgba(102, 126, 234, 0.1)",
    borderRadius: "12px",
    border: "1px solid rgba(102, 126, 234, 0.2)",
  },
  infoTitle: {
    fontSize: "13px",
    fontWeight: 600,
    margin: "0 0 8px 0",
    color: "#667eea",
  },
  infoList: {
    margin: 0,
    paddingLeft: "20px",
    fontSize: "12px",
    color: "#a0aec0",
    lineHeight: 1.8,
  },
};

// Storybook Meta
const meta: Meta<typeof MascotPlayground> = {
  title: "Legali/Mascot/Playground",
  component: MascotPlayground,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
An interactive playground to experiment with the Legali mascot animation.

## Features
- 🎬 **15 Motion States** - Switch between all available animations
- 👁️ **Blink Control** - Toggle character blinking on/off
- 🎲 **Random Motion** - Get a random animation
- 🔄 **Reset** - Return to default state

Try it out below!
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MascotPlayground>;

/**
 * The main playground interface.
 * Use the controls to interact with the mascot animation.
 */
export const Interactive: Story = {};
