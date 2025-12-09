/**
 * LegaliMascot Component
 *
 * A React wrapper for the Rive mascot animation with support for
 * View Model data binding and motion state control.
 *
 * @module LegaliMascot
 */

import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'
import { useEffect, useRef } from 'react'

/**
 * Available motion states for the mascot animation.
 * These correspond to the MOTIONS enum in the Rive View Model.
 */
export const MascotMotion = {
  EXIT: 'EXIT',
  NORMAL: 'NORMAL',
  LAPTOP: 'LAPTOP',
  WRITING: 'WRITING',
  IDLE: 'IDLE',
  THINKING: 'THINKING',
  CRYING: 'CRYING',
  SPEAKING: 'SPEAKING',
  CONFUSED: 'CONFUSED',
  WAVING: 'WAVING',
  SHRUG: 'SHRUG',
  CELEBRATE: 'CELEBRATE',
} as const

export type MascotMotionType = (typeof MascotMotion)[keyof typeof MascotMotion]

/**
 * Human-readable labels for each motion state.
 */
export const MascotMotionLabels: Record<MascotMotionType, string> = {
  [MascotMotion.EXIT]: 'Exit',
  [MascotMotion.NORMAL]: 'Normal',
  [MascotMotion.LAPTOP]: 'Laptop',
  [MascotMotion.WRITING]: 'Writing',
  [MascotMotion.IDLE]: 'Idle',
  [MascotMotion.THINKING]: 'Thinking',
  [MascotMotion.CRYING]: 'Crying',
  [MascotMotion.SPEAKING]: 'Speaking',
  [MascotMotion.CONFUSED]: 'Confused',
  [MascotMotion.WAVING]: 'Waving',
  [MascotMotion.SHRUG]: 'Shrug',
  [MascotMotion.CELEBRATE]: 'Celebrate',
}

export interface LegaliMascotProps {
  /**
   * The current motion/animation state to display.
   * @default MascotMotion.IDLE
   */
  motion?: MascotMotionType

  /**
   * Whether the mascot should blink.
   * @default true
   */
  isBlink?: boolean

  /**
   * Width of the canvas container.
   * @default 300
   */
  width?: number | string

  /**
   * Height of the canvas container.
   * @default 300
   */
  height?: number | string

  /**
   * Path to the .riv animation file.
   * @default '/src/animations/legali.riv'
   */
  src?: string

  /**
   * Name of the state machine to use.
   * @default 'SM_MASCOT'
   */
  stateMachine?: string

  /**
   * Additional CSS class names for the container.
   */
  className?: string

  /**
   * Callback fired when the Rive animation is loaded.
   */
  onLoad?: () => void

  /**
   * Callback fired when the motion state changes.
   */
  onMotionChange?: (motion: MascotMotionType) => void
}

/**
 * LegaliMascot Component
 *
 * Displays an animated mascot character using Rive animations.
 * The mascot supports multiple motion states and blinking control
 * through View Model data binding.
 */
export function LegaliMascot({
  motion = MascotMotion.IDLE,
  isBlink = true,
  width = 300,
  height = 300,
  src = '/animations/legali.riv',
  stateMachine = 'SM_MASCOT',
  className = '',
  onLoad,
  onMotionChange,
}: LegaliMascotProps) {
  // Store references to view model properties
  const blinkPropertyRef = useRef<any>(null)
  const animatesPropertyRef = useRef<any>(null)
  const isInitializedRef = useRef(false)

  const handleRiveLoad = () => {
    // This function is called when the Rive animation is loaded.
    // The actual initialization logic is in the useEffect hook.
    // We can use this for external callbacks if needed.
  }

  const { rive, RiveComponent } = useRive({
    src,
    stateMachines: stateMachine,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    autoplay: true,
    autoBind: true, // Enable auto-binding to the default view model instance
    onLoad: handleRiveLoad,
  })

  // Initialize view model properties when rive becomes available
  useEffect(() => {
    if (rive && !isInitializedRef.current) {
      try {
        // Access the auto-bound view model instance
        const vmi = rive.viewModelInstance
        console.log('Rive loaded, viewModelInstance:', vmi)

        if (vmi) {
          // Get boolean property for isBlink
          blinkPropertyRef.current = vmi.boolean('isBlink')
          // Get enum property for animates
          animatesPropertyRef.current = vmi.enum('animates')

          console.log('Properties initialized:', {
            blink: blinkPropertyRef.current,
            animates: animatesPropertyRef.current,
          })

          // Set initial values
          if (blinkPropertyRef.current) {
            blinkPropertyRef.current.value = isBlink
          }
          if (animatesPropertyRef.current) {
            animatesPropertyRef.current.value = motion
          }

          isInitializedRef.current = true
          onLoad?.()
        }
      } catch (error) {
        console.warn('Failed to initialize view model:', error)
      }
    }
  }, [rive, isBlink, motion, onLoad])

  // Update blink state when prop changes
  useEffect(() => {
    if (blinkPropertyRef.current && isInitializedRef.current) {
      blinkPropertyRef.current.value = isBlink
    }
  }, [isBlink])

  // Track previous motion to detect changes
  const prevMotionRef = useRef<MascotMotionType>(motion)

  // Update motion state when prop changes - reset to NORMAL first
  useEffect(() => {
    if (animatesPropertyRef.current && isInitializedRef.current) {
      // Only apply reset logic if motion actually changed
      if (prevMotionRef.current !== motion) {
        // First, set to NORMAL to reset all animation attributes
        animatesPropertyRef.current.value = MascotMotion.NORMAL

        // After 300ms, apply the target motion
        const timer = setTimeout(() => {
          if (animatesPropertyRef.current) {
            animatesPropertyRef.current.value = motion
            onMotionChange?.(motion)
          }
        }, 300)

        prevMotionRef.current = motion

        return () => clearTimeout(timer)
      }
    }
  }, [motion, onMotionChange])

  return (
    <div
      className={`rive-mascot-container ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      <RiveComponent />
    </div>
  )
}

export default LegaliMascot
