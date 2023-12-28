"use client";
//import MainMenu from "../mainMenu";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { occupations } from "../../../../constant/occupations.json";

export default function GetLeads() {
	function capitalizeFirstLetter(str) {
		return str
			.split(" ") // Split the string into words
			.map(
				(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize the first letter of each word
			)
			.join(" "); // Join the words back together
	}

	const capitalizedPeople = occupations.map(capitalizeFirstLetter);

	return (
		<form className="container mx-auto my-10 max-w-7xl">
			<div className="bg-brown-600 mb-10 rounded-md">
				<div className="mb-4 rounded-md p-8 md:flex md:items-center md:justify-between">
					<div className="min-w-0 flex-1">
						<h2 className="text-2xl font-bold leading-7 text-black sm:truncate sm:text-3xl sm:tracking-tight">Get Leads</h2>
						<p>Once you signup</p>
					</div>
				</div>
			</div>
			<div className="space-y-12">
				<div className="rounded-md bg-[#252525] px-4 py-12 md:px-10">
					<h2 className="text-base font-semibold leading-7 text-white">Personal Information</h2>
					<p className="mt-1 text-sm leading-6 text-gray-400">Use a permanent address where you can receive mail.</p>

					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-4">
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
								Email address
							</label>
							<div className="mt-2">
								<input id="email" name="email" type="email" autoComplete="email" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
							</div>
						</div>

						<div className="sm:col-span-4">
							<label htmlFor="phone" className="block text-sm font-medium leading-6 text-white">
								Phone
							</label>
							<div className="mt-2">
								<input id="phone" name="phone" type="phone" autoComplete="phone" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
							</div>
						</div>

						<div className="sm:col-span-4">
							<label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
								Job Categories
							</label>
							<div className="mt-2">
								<select id="location" name="location" className="focus:ring-brown-500 relative w-full cursor-default rounded-md bg-white/5 py-1.5 pl-3 pr-10 text-left text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6">
									{capitalizedPeople.map((capitalizedPeople) => (
										<option key={capitalizedPeople} value={capitalizedPeople}>
											{capitalizedPeople}
										</option>
									))}
								</select>
							</div>
							<p className="mt-2 text-sm text-gray-500" id="email-description">
								We&#39;ll only use this for spam.
							</p>
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="country" className="block text-sm font-medium leading-6 text-white">
								Country
							</label>
							<div className="mt-2">
								<select id="country" name="country" autoComplete="country-name" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 [&_*]:text-black">
									<option>United States</option>
									<option>Canada</option>
									<option>Mexico</option>
								</select>
							</div>
						</div>

						<div className="col-span-full">
							<label htmlFor="street-address" className="block text-sm font-medium leading-6 text-white">
								Street address
							</label>
							<div className="mt-2">
								<input type="text" name="street-address" id="street-address" autoComplete="street-address" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
							</div>
						</div>

						<div className="sm:col-span-2 sm:col-start-1">
							<label htmlFor="city" className="block text-sm font-medium leading-6 text-white">
								City
							</label>
							<div className="mt-2">
								<input type="text" name="city" id="city" autoComplete="address-level2" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
							</div>
						</div>

						<div className="sm:col-span-2">
							<label htmlFor="region" className="block text-sm font-medium leading-6 text-white">
								State / Province
							</label>
							<div className="mt-2">
								<input type="text" name="region" id="region" autoComplete="address-level1" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
							</div>
						</div>

						<div className="sm:col-span-2">
							<label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-white">
								ZIP / Postal code
							</label>
							<div className="mt-2">
								<input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
							</div>
						</div>
					</div>
				</div>

				<div className="rounded-md bg-[#252525] px-4 py-12 md:px-10">
					<h2 className="text-base font-semibold leading-7 text-white">Notifications</h2>
					<p className="mt-1 text-sm leading-6 text-gray-400">We&#39;ll always let you know about important changes, but you pick what else you want to hear about.</p>

					<div className="mt-10 space-y-10">
						<fieldset>
							<legend className="text-sm font-semibold leading-6 text-white">By Email</legend>
							<div className="mt-6 space-y-6">
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input id="comments" name="comments" type="checkbox" className="text-brown-600 focus:ring-brown-600 h-4 w-4 rounded-md border-white/10 bg-white/5 focus:ring-offset-gray-900" />
									</div>
									<div className="text-sm leading-6">
										<label htmlFor="comments" className="font-medium text-white">
											Comments
										</label>
										<p className="text-gray-400">Get notified when someones posts a comment on a posting.</p>
									</div>
								</div>
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input id="candidates" name="candidates" type="checkbox" className="text-brown-600 focus:ring-brown-600 h-4 w-4 rounded-md border-white/10 bg-white/5 focus:ring-offset-gray-900" />
									</div>
									<div className="text-sm leading-6">
										<label htmlFor="candidates" className="font-medium text-white">
											Candidates
										</label>
										<p className="text-gray-400">Get notified when a candidate applies for a job.</p>
									</div>
								</div>
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input id="offers" name="offers" type="checkbox" className="text-brown-600 focus:ring-brown-600 h-4 w-4 rounded-md border-white/10 bg-white/5 focus:ring-offset-gray-900" />
									</div>
									<div className="text-sm leading-6">
										<label htmlFor="offers" className="font-medium text-white">
											Offers
										</label>
										<p className="text-gray-400">Get notified when a candidate accepts or rejects an offer.</p>
									</div>
								</div>
							</div>
						</fieldset>
						<fieldset>
							<legend className="text-sm font-semibold leading-6 text-white">Push Notifications</legend>
							<p className="mt-1 text-sm leading-6 text-gray-400">These are delivered via SMS to your mobile phone.</p>
							<div className="mt-6 space-y-6">
								<div className="flex items-center gap-x-3">
									<input id="push-everything" name="push-notifications" type="radio" className="text-brown-600 focus:ring-brown-600 h-4 w-4 border-white/10 bg-white/5 focus:ring-offset-gray-900" />
									<label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-white">
										Everything
									</label>
								</div>
								<div className="flex items-center gap-x-3">
									<input id="push-email" name="push-notifications" type="radio" className="text-brown-600 focus:ring-brown-600 h-4 w-4 border-white/10 bg-white/5 focus:ring-offset-gray-900" />
									<label htmlFor="push-email" className="block text-sm font-medium leading-6 text-white">
										Same as email
									</label>
								</div>
								<div className="flex items-center gap-x-3">
									<input id="push-nothing" name="push-notifications" type="radio" className="text-brown-600 focus:ring-brown-600 h-4 w-4 border-white/10 bg-white/5 focus:ring-offset-gray-900" />
									<label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-white">
										No push notifications
									</label>
								</div>
							</div>
						</fieldset>
					</div>
				</div>
			</div>

			<div className="mt-10 flex items-center justify-end gap-x-6">
				<button type="button" className="text-sm font-semibold leading-6 text-white">
					Cancel
				</button>
				<button type="submit" className="bg-brown-500 hover:bg-brown-400 focus-visible:outline-brown-500 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
					Save
				</button>
			</div>
		</form>
	);
}
