const nodes = [
  { label: "Enrichment", meta: "role · budget · intent" },
  { label: "Summaries", meta: "written for humans" },
  { label: "Scoring", meta: "priority in real time" },
  { label: "CRM sync", meta: "updates pushed back" },
];

const boxY = [39, 120, 201, 282];
const centers = boxY.map((y) => y + 27);

const paths = centers.map(
  (y) => `M220 188 C284 188 328 ${y} 404 ${y}`
);

export function DataFlowVisual() {
  return (
    <svg
      role="img"
      aria-labelledby="data-flow-title"
      viewBox="0 0 600 375"
      preserveAspectRatio="xMidYMid meet"
      className="size-full"
    >
      <title id="data-flow-title">
        An Euler agent sending enriched lead data to four downstream tools
      </title>

      {/* Connectors */}
      {paths.map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          strokeLinecap="round"
          strokeWidth={1.25}
          className="stroke-orange-800/25"
        />
      ))}

      {/* Destination boxes */}
      {nodes.map((node, index) => (
        <g key={node.label}>
          <rect
            x={404}
            y={boxY[index]}
            width={168}
            height={54}
            rx={12}
            strokeWidth={1}
            className="fill-white stroke-black/10 dark:fill-white/[0.03] dark:stroke-white/10"
          />
          <text
            x={422}
            y={boxY[index] + 23}
            className="fill-gray-950 font-medium text-[14px] dark:fill-neutral-50"
          >
            {node.label}
          </text>
          <text
            x={422}
            y={boxY[index] + 39}
            className="fill-black/45 text-[11px] dark:fill-white/45"
          >
            {node.meta}
          </text>
          <circle
            cx={552}
            cy={boxY[index] + 27}
            r={3}
            className="fill-orange-800/50"
          />
        </g>
      ))}

      {/* Source box */}
      <g>
        <rect
          x={28}
          y={144}
          width={192}
          height={88}
          rx={14}
          strokeWidth={1}
          className="fill-white stroke-black/10 dark:fill-white/[0.03] dark:stroke-white/10"
        />
        <image
          href="/app/logo-light.svg"
          x={42}
          y={173}
          width={55}
          height={29}
          className="dark:hidden"
        />
        <image
          href="/app/logo-dark.svg"
          x={42}
          y={173}
          width={55}
          height={29}
          className="hidden dark:block"
        />
        <text
          x={106}
          y={180}
          className="fill-gray-950 font-semibold text-[15px] dark:fill-neutral-50"
        >
          Euler agent
        </text>
        <text
          x={106}
          y={198}
          className="fill-black/45 text-[11px] dark:fill-white/45"
        >
          Running · 4 tools
        </text>
        <circle cx={220} cy={188} r={3.5} className="fill-orange-800" />
      </g>

      {/* Light streaks: continuous conveyor, one line every 500ms */}
      {paths.map((d, index) => (
        <path
          key={`streak-${d}`}
          d={d}
          pathLength={100}
          fill="none"
          strokeLinecap="round"
          strokeWidth={2}
          className="flow-streak stroke-orange-800"
          style={{ animationDelay: `${index * 0.5 - 1.5}s` }}
        />
      ))}
    </svg>
  );
}

export default DataFlowVisual;
