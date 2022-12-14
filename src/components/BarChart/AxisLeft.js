export const AxisLeft = ({ yScale }) =>
	yScale.domain().map((tickValue) => (
		<text
			key={tickValue}
			style={{ textAnchor: "end" }}
			x={-5}
			y={yScale(tickValue) + yScale.bandwidth() / 2}
			dy=".32em"
		>
			{tickValue}
		</text>
	));
