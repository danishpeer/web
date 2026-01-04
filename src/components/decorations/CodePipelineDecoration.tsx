"use client";

import { motion } from "framer-motion";

/**
 * CodePipelineDecoration Component
 * A meaningful decorative element representing:
 * - Code brackets < /> representing JSX/React development
 * - Connected nodes showing data pipeline / system architecture
 * - Branching paths representing distributed systems
 */
export default function CodePipelineDecoration() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 650 140"
      fill="none"
      preserveAspectRatio="xMinYMid meet"
    >
      {/* Opening bracket < - represents code/JSX */}
      <motion.path
        d="M40 70 L15 50 L40 30"
        stroke="#b0b0b0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Closing bracket /> - proper JSX self-closing tag */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
      >
        {/* Forward slash / */}
        <motion.path
          d="M555 70 L575 30"
          stroke="#b0b0b0"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
        />
        {/* Greater than > */}
        <motion.path
          d="M580 30 L605 50 L580 70"
          stroke="#b0b0b0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
        />
      </motion.g>

      {/* Connection line 1: Data flow / Pipeline */}
      <motion.path
        d="M55 50 C120 50 140 85 200 85 C260 85 280 50 340 50"
        stroke="#c4c4c4"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      />

      {/* Connection line 2: Parallel process */}
      <motion.path
        d="M340 50 C400 50 420 85 480 85 C520 85 530 50 540 50"
        stroke="#c4c4c4"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      />

      {/* Node 1: Input/Source */}
      <motion.circle
        cx="55"
        cy="50"
        r="4"
        fill="#a0a0a0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      />

      {/* Node 2: Processing */}
      <motion.circle
        cx="200"
        cy="85"
        r="5"
        fill="#909090"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />

      {/* Node 3: Central hub (larger - main processing) */}
      <motion.circle
        cx="340"
        cy="50"
        r="6"
        fill="#808080"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      />

      {/* Node 4: Secondary processing */}
      <motion.circle
        cx="480"
        cy="85"
        r="5"
        fill="#909090"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.0 }}
      />

      {/* Node 5: Output */}
      <motion.circle
        cx="540"
        cy="50"
        r="4"
        fill="#a0a0a0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      />

      {/* Subtle branching line - represents distributed systems */}
      <motion.path
        d="M200 85 C220 85 230 110 260 110 L320 110"
        stroke="#d4d4d4"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
      />

      {/* Small node on branch */}
      <motion.circle
        cx="320"
        cy="110"
        r="3"
        fill="#b0b0b0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 0.3, delay: 1.0 }}
      />

      {/* Another branching line - ML parallel processing */}
      <motion.path
        d="M340 50 C350 50 360 25 390 25 L440 25"
        stroke="#d4d4d4"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
      />

      {/* Small node on upper branch */}
      <motion.circle
        cx="440"
        cy="25"
        r="3"
        fill="#b0b0b0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      />
    </svg>
  );
}

