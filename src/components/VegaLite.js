import vl from "vega-lite-api";

const VegaLite = () => {
	return (
		<>
			{vl
				.markPoint()
				.encode(
					vl.x().fieldQ("acceleration").scale({ zero: false }),
					vl.y().fieldQ("horsepower").scale({ zero: false }),
					vl.tooltip().fieldN("name")
				)}
		</>
	);
};

export default VegaLite;
