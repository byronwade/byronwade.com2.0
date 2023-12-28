"use client";
import React, { useRef, useEffect } from "react";
import { select, line, curveCardinal, scaleLinear, axisBottom, axisLeft } from "d3";
import { Calendar, Shield } from "react-feather";
import Link from "next/link";
//data
const data = {
	line1: [
		{ x: 0, y: 10 },
		{ x: 1, y: 20 },
		{ x: 2, y: 15 },
		{ x: 3, y: 25 },
		{ x: 4, y: 30 },
	],
	line2: [
		{ x: 0, y: 15 },
		{ x: 1, y: 25 },
		{ x: 2, y: 20 },
		{ x: 3, y: 35 },
		{ x: 4, y: 40 },
	],
};

//chart component
const Insights = () => {
	// //refs
	// const svgRef = useRef();

	// //draws chart
	// useEffect(() => {
	// 	const svg = select(svgRef.current);

	// 	const width = svg.node().getBoundingClientRect().width;
	// 	const height = svg.node().getBoundingClientRect().height;

	// 	const xScale = scaleLinear()
	// 		.domain([0, data.line1.length - 1])
	// 		.range([0, width]);

	// 	const yScale = scaleLinear().domain([0, 100]).range([height, 0]);

	// 	svg.select(".x-axis").style("transform", `translateY(${height}px)`).call(axisBottom(xScale).ticks(data.line1.length));

	// 	svg.select(".y-axis").call(axisLeft(yScale));

	// 	Object.entries(data).forEach(([key, value], idx) => {
	// 		svg.selectAll(`.line-${idx}`)
	// 			.data([value])
	// 			.join("path")
	// 			.attr("class", `line-${idx}`)
	// 			.attr(
	// 				"d",
	// 				line()
	// 					.x((d, i) => xScale(i))
	// 					.y((d) => yScale(d.y))
	// 					.curve(curveCardinal)
	// 			)
	// 			.attr("fill", "none")
	// 			.attr("stroke", idx === 0 ? "#00bfa6" : "#f00"); // You can define more colors for multiple lines
	// 	});
	// }, [data]);

	return (
		<>
			<div className="mx-auto w-full flex-1 px-6 py-8 sm:px-12 sm:py-12">
				<div className="mx-auto h-full max-w-7xl">
					<div className="mb-8 flex flex-col items-stretch gap-y-4 lg:flex-row lg:gap-x-4 lg:gap-y-0 xl:gap-x-6">
						<div className="flex w-full flex-col">
							<div className="relative flex h-full flex-col rounded border border-white/20">
								<div className="mx-auto max-w-2xl px-6 py-16 text-center">
									<div className="text-blue m-auto mb-3 inline-block">
										<Calendar width={64} height={64} />
									</div>
									<h2 className="text-primary mb-1 text-lg font-semibold">Comming Soon</h2>
									<div className="mb-3 text-[#fafafa]">This section is still a work in progress.</div>
								</div>
							</div>
						</div>
					</div>

					{/* <div className="mb-2 flex flex-col justify-between space-y-4 sm:mb-4 sm:flex-row sm:items-center sm:space-y-0">
						<h1 className="text-xl font-semibold">Insights</h1>
						<div className="flex space-x-2">
							<div className="focus-within-ring text-primary flex items-stretch rounded border border-white/20 shadow-sm">
								<label className="mb-0 flex select-none items-center space-x-1 whitespace-nowrap rounded-l rounded-r-none border-r border-white/20 bg-[#1a1a1a] px-1.5 font-medium">
									<span>Servers</span>
								</label>
								<select aria-label="Servers" className="focus-ring block inline-block h-auto w-full rounded border border-b-0 border-l-0 border-r-0 border-t-0 border-white/20 bg-[#111] py-0 pl-1.5 pl-2 pr-4 !shadow-none shadow-sm !ring-0">
									<option value="">All</option>
									<option value="primary">Primary</option>
									<option value="replica">Replicas</option>
								</select>
							</div>
							<div className="focus-within-ring text-primary flex items-stretch rounded border border-white/20 shadow-sm">
								<label className="mb-0 flex select-none items-center space-x-1 whitespace-nowrap rounded-l rounded-r-none border-r border-white/20 bg-[#1a1a1a] px-1.5 font-medium">
									<span>Branch</span>
								</label>
								<select aria-label="Branch" className="focus-ring block inline-block h-auto w-full rounded border border-b-0 border-l-0 border-r-0 border-t-0 border-white/20 bg-[#111] py-0 pl-1.5 pl-2 pr-4 !shadow-none shadow-sm !ring-0">
									<option value="main">main</option>
								</select>
							</div>
						</div>
					</div>
					<div className="mb-2 flex flex-col space-y-2 md:mb-3 md:flex-row md:items-end md:justify-between md:space-x-2 md:space-y-0">
						<select aria-label="Graph metric" className="focus-ring inline-block rounded border border-white/20 bg-[#111] py-2 pl-1.5 pr-4 text-sm font-semibold leading-none shadow-sm">
							<option value="latency">Query latency</option>
							<option value="queries">Queries per second</option>
							<option value="rows_read">Rows read</option>
							<option value="rows_written">Rows written</option>
							<option value="errors">Query errors</option>
						</select>
						<div className="space-x-sm flex flex-1 items-end justify-between md:space-x-2">
							<div className="flex w-[87.5%] flex-1 justify-end">
								<div className="flex flex-1 flex-col">
									<div className="flex">
										<div className="mb-0.5 w-full max-w-[120px] text-center text-xs tracking-tight text-[#a1a1a1] sm:text-sm">Sep 27</div>
										<div className="mb-0.5 w-full max-w-[120px] text-center text-xs tracking-tight text-[#a1a1a1] sm:text-sm">Sep 28</div>
										<div className="mb-0.5 w-full max-w-[120px] text-center text-xs tracking-tight text-[#a1a1a1] sm:text-sm">Sep 29</div>
										<div className="mb-0.5 w-full max-w-[120px] text-center text-xs tracking-tight text-[#a1a1a1] sm:text-sm">Sep 30</div>
										<div className="mb-0.5 w-full max-w-[120px] text-center text-xs tracking-tight text-[#a1a1a1] sm:text-sm">Oct 1</div>
										<div className="mb-0.5 w-full max-w-[120px] text-center text-xs tracking-tight text-[#a1a1a1] sm:text-sm">Oct 2</div>
										<div className="mb-0.5 w-full max-w-[120px] text-center text-xs tracking-tight text-[#a1a1a1] sm:text-sm">Oct 3</div>
									</div>
									<div className="flex h-[32px] items-center justify-center rounded border border-white/20 bg-[#1a1a1a] text-xs text-[#a1a1a1] sm:text-sm">
										<div>
											<a href="/bcw1995/byronwade-com/settings/plans">Upgrade your plan</a> to view more history
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-6">
						<div>
							<div className="flex flex-col justify-between">
								<div className="flex flex-1 flex-col justify-between pb-2 pt-1" data-screenshot-exclude="true">
									<div className="flex w-full flex-row justify-between space-x-3 font-mono text-sm">
										<div className="text-primary flex flex-wrap gap-x-1.5">
											<button title="Toggle p50" className="rounded-full border border-white/20 px-1 py-[3px]">
												<div className="flex items-center space-x-1">
													<div className="h-1 w-1 rounded-full" style={{ background: "var(--green-600)" }} />
													<div className="flex">
														<div>p50:</div>
														<span className="text-primary whitespace-nowrap text-right font-semibold" style={{ width: 52 }}>
															0 ms
														</span>
													</div>
												</div>
											</button>
											<button title="Toggle p95" className="rounded-full border border-white/20 px-1 py-[3px]">
												<div className="flex items-center space-x-1">
													<div className="h-1 w-1 rounded-full" style={{ background: "var(--blue-600)" }} />
													<div className="flex">
														<div>p95:</div>
														<span className="text-primary whitespace-nowrap text-right font-semibold" style={{ width: 52 }}>
															0 ms
														</span>
													</div>
												</div>
											</button>
											<button title="Toggle p99" className="rounded-full border border-white/20 px-1 py-[3px] opacity-60">
												<div className="flex items-center space-x-1">
													<div className="h-1 w-1 rounded-full" style={{ background: "var(--purple-600)" }} />
													<div className="flex">
														<div>p99:</div>
														<span className="text-primary whitespace-nowrap text-right font-semibold" style={{ width: 52 }}>
															0 ms
														</span>
													</div>
												</div>
											</button>
											<button title="Toggle p99.9" className="rounded-full border border-white/20 px-1 py-[3px] opacity-60">
												<div className="flex items-center space-x-1">
													<div className="h-1 w-1 rounded-full" style={{ background: "var(--orange-600)" }} />
													<div className="flex">
														<div>p99.9:</div>
														<span className="text-primary whitespace-nowrap text-right font-semibold" style={{ width: 52 }}>
															0 ms
														</span>
													</div>
												</div>
											</button>
										</div>
										<div className="grow text-right text-[#a1a1a1]">11:00</div>
									</div>
								</div>
								<div className="flex-auto py-1 text-[#a1a1a1]">
									<svg ref={svgRef} style={{ width: "100%", height: "100%" }}>
										<g className="x-axis"></g>
										<g className="y-axis"></g>
									</svg>
								</div>
							</div>
						</div>
						<div className="flex flex-wrap justify-between gap-y-2 rounded border bg-[#1a1a1a] px-2 py-1.5 sm:items-center md:flex-row">
							<div className="basis-full sm:basis-1/3 md:basis-1/4">
								<div className="flex items-center space-x-1">
									<button className="pl-xs h-2.5 w-4 rounded-full bg-blue-600 transition duration-75" id="headlessui-switch-:r8:" role="switch" type="button" tabIndex={0} aria-checked="true" data-headlessui-state="checked" aria-labelledby="headlessui-label-:r9:">
										<span className="block h-2 w-2 translate-x-1.5 rounded-full bg-[#111] shadow-md transition duration-75" />
									</button>
									<label className="pt-xs mb-0 block cursor-default select-none font-semibold" id="headlessui-label-:r9:" htmlFor="headlessui-switch-:r8:">
										Show events
									</label>
								</div>
							</div>
							<div className="flex basis-full items-center space-x-1 text-[#a1a1a1] sm:basis-2/3 sm:justify-end md:basis-1/2 md:justify-center">
								<svg width={16} height={16} className="text-blue">
									<use href="/_next/static/media/icons.f95cb430.svg#drag-select" />
								</svg>
								<span className="text-sm font-medium">Drag-select to choose a timeframe</span>
							</div>
							<div className="flex basis-full justify-end -space-x-px md:basis-1/4">
								<div className="flex flex-1 md:flex-none">
									<button type="button" className="focus-ring text-primary relative box-border inline-flex w-full shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded rounded-r-none border border-white/20 bg-[#111] px-1.5 py-1 text-center text-sm font-semibold leading-none no-underline transition hover:bg-[#1a1a1a]">
										<div className="flex items-center space-x-1">
											<svg width={16} height={16}>
												<use href="/_next/static/media/icons.f95cb430.svg#screenshot" />
											</svg>
											<span>Save</span>
										</div>
									</button>
									<a hidden="" download="byronwade-com-main-latency-2023-10-04.png">
										Save graph
									</a>
								</div>
								<button type="button" className="focus-ring text-primary relative box-border inline-flex flex-1 shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded rounded-l-none border border-white/20 bg-[#111] px-1.5 py-1 text-center text-sm font-semibold leading-none no-underline transition hover:bg-[#1a1a1a] md:flex-none">
									<div className="flex items-center space-x-1">
										<svg width={16} height={16}>
											<use href="/_next/static/media/icons.f95cb430.svg#clipboard" />
										</svg>
										<span>Copy</span>
									</div>
								</button>
							</div>
						</div>
					</div>
					<div className="mb-3 border-b">
						<div className="-mb-px flex overflow-x-auto">
							<a className="focus-visible-ring text-primary whitespace-nowrap border-b border-blue-600 p-2 font-semibold leading-none transition" href="/bcw1995/byronwade-com/main/insights?selectedFrom=2023-10-04T17%3A00%3A00.000Z&selectedTo=2023-10-04T18%3A00%3A00.000Z">
								Queries
							</a>
							<a className="focus-visible-ring text-primary whitespace-nowrap border-b border-transparent p-2 leading-none transition hover:border-gray-300 dark:hover:border-gray-600" href="/bcw1995/byronwade-com/main/insights?selectedFrom=2023-10-04T17%3A00%3A00.000Z&selectedTo=2023-10-04T18%3A00%3A00.000Z&errors=1">
								Errors
							</a>
						</div>
					</div>
					<div className="mb-2 flex flex-col space-y-1 lg:flex-row lg:items-center lg:justify-between lg:space-x-3 lg:space-y-0">
						<h2 className="space-x-sm mb-1 flex items-center text-lg font-semibold sm:mb-0">
							<span className="sm:space-x-sm flex flex-col sm:flex-row">
								<span>Queries between</span>
								<span className="space-x-sm flex">
									<time dateTime="2023-10-04T17:00:00.000Z" className="text-green">
										October 4, 10:00
									</time>
									<span>and</span>
									<time dateTime="2023-10-04T18:00:00.000Z" className="text-green">
										October 4, 11:00
									</time>
								</span>
							</span>
						</h2>
						<div className="flex flex-auto justify-between space-x-2 lg:justify-end">
							<form className="relative max-w-sm flex-1">
								<input type="search" placeholder="Filter queries…" autoComplete="off" autoCorrect="off" autoCapitalize="none" className="shadow-inner-sm text-primary py-sm focus-ring w-full rounded border border-white/20 bg-[#1a1a1a] px-1.5 pr-4 text-base ring-offset-0" defaultValue="" />
								<div className="absolute right-1.5 top-1 text-[#a1a1a1]">
									<div>
										<button type="button" className="focus-visible-ring">
											<svg width={16} height={16}>
												<use href="/_next/static/media/icons.f95cb430.svg#question-circle" />
											</svg>
										</button>
									</div>
								</div>
							</form>
							<details className="Menu_menu__rvza_">
								<summary className="focus-ring inline-flex cursor-pointer rounded" aria-haspopup="true">
									<div className="focus-ring text-primary relative box-border flex inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 bg-[#111] px-2 py-1.5 text-center font-semibold leading-none no-underline transition hover:bg-[#1a1a1a]">
										<span className="mr-1">Columns</span>
										<span className="">
											<svg width={16} height={16}>
												<use href="/_next/static/media/icons.f95cb430.svg#chevron-down" />
											</svg>
										</span>
									</div>
								</summary>
								<div className="shadow-border-lg absolute right-0 z-40 mt-1 w-60 w-full origin-top-right rounded-md bg-[#111] p-2 md:w-[200px]">
									<div className="space-y-1">
										<div className="flex items-center space-x-1">
											<input type="checkbox" id="query-col" className="top-px inline-block rounded-sm" defaultChecked="" />
											<label htmlFor="query-col" className="mb-0 font-medium">
												Query
											</label>
										</div>
										<div className="flex items-center space-x-1">
											<input type="checkbox" id="table-col" className="inline-block rounded-sm" />
											<label htmlFor="table-col" className="mb-0 font-medium">
												Table
											</label>
										</div>
										<div className="flex items-center space-x-1">
											<input type="checkbox" id="count-col" className="inline-block rounded-sm" defaultChecked="" />
											<label htmlFor="count-col" className="mb-0 font-medium">
												Count
											</label>
										</div>
										<div className="flex items-center space-x-1">
											<input type="checkbox" id="total-time-col" className="top-px inline-block rounded-sm" defaultChecked="" />
											<label htmlFor="total-time-col" className="mb-0 font-medium">
												Total time
											</label>
										</div>
										<div className="flex items-center space-x-1">
											<input type="checkbox" id="p50-latency-col" className="top-px inline-block rounded-sm" defaultChecked="" />
											<label htmlFor="p50-latency-col" className="mb-0 font-medium">
												p50 latency
											</label>
										</div>
										<div className="flex items-center space-x-1">
											<input type="checkbox" id="p99-latency-col" className="top-px inline-block rounded-sm" defaultChecked="" />
											<label htmlFor="p99-latency-col" className="mb-0 font-medium">
												p99 latency
											</label>
										</div>
										<div className="flex items-center space-x-1">
											<input type="checkbox" id="rows-returned-col" className="top-px inline-block rounded-sm" defaultChecked="" />
											<label htmlFor="rows-returned-col" className="mb-0 font-medium">
												Rows returned
											</label>
										</div>
										<div className="flex items-center space-x-1">
											<input type="checkbox" id="rows-read-col" className="top-px inline-block rounded-sm" defaultChecked="" />
											<label htmlFor="rows-read-col" className="mb-0 font-medium">
												Rows read
											</label>
										</div>
										<div className="flex items-center space-x-1">
											<input type="checkbox" id="rows-affected-col" className="top-px inline-block rounded-sm" />
											<label htmlFor="rows-affected-col" className="mb-0 font-medium">
												Rows affected
											</label>
										</div>
										<div className="flex items-center space-x-1">
											<input type="checkbox" id="last-run-col" className="inline-block rounded-sm" />
											<label htmlFor="last-run-col" className="mb-0 font-medium">
												Last run
											</label>
										</div>
									</div>
								</div>
							</details>
						</div>
					</div>
					<div className="mb-4 overflow-hidden rounded-md border border-white/20">
						<div className="mx-auto max-w-2xl px-6 py-16 text-center">
							<div className="text-blue m-auto mb-3 inline-block">
								<svg width={64} height={64}>
									<use href="/_next/static/media/icons.f95cb430.svg#table-xl" />
								</svg>
							</div>
							<h2 className="text-primary mb-1 text-lg font-semibold">No active queries</h2>
							<div className="mb-3 text-[#a1a1a1]">There are no queries actively running on this branch.</div>
						</div>
					</div>
					<div hidden="">
						<svg width={16} height={16}>
							<use href="/_next/static/media/icons.f95cb430.svg#boost-colored" />
						</svg>
					</div> */}
				</div>
			</div>
		</>
	);
};

export default Insights;
