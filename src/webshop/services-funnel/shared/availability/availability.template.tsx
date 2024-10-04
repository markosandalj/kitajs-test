import LocationAutocomplete, {
	LocationAutocompleteProps,
} from "@shared/components/location-autocomplete/location-autocomplete.template";

export type AvailabilityProps = {
	isExpired?: boolean;
	locationAutocompleteData: LocationAutocompleteProps;
};

function Availability({ locationAutocompleteData }: AvailabilityProps) {
	return (
		<>
			<section class="availability bg-white" data-availability>
				<div class="container container--mid pt-0 pb-8 md:py-16 md:pt-16 md:pb-16">
					<div class="row py-8">
						<div class="col-xl-5 col-lg-5 col-md-5">
							<div>
								<h3 class="title-h3 mb-2">Provjeri dostupnost na svojoj adresi</h3>
								<p class="body-text-base">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi
									nunc, suscipit in mollis vitae, sodales quis diam. Donec dignissim aliquam
									enim vel ornare.
								</p>
							</div>
						</div>
						<div class="col-xl-5 col-lg-6 col-md-5 offset-xl-2 offset-lg-1 offset-md-2 pt-8">
							<form
								action="https://devi5www-a1.test3.netgen.biz/INTERSHOP/web/WFS/A1-Shop-Site/hr_HR/a1-fixed/HRK/ViewRequisitionAvailability-ProcessTechnologyAvailability"
								method="POST"
								name="TechnologyAvailabilityForm"
								id="AvailabilityForm"
								class="js-form-validation has-loader"
								data-action-check-availability-url="https://devi5www.a1.hr/INTERSHOP/web/WFS/A1-Shop-Site/hr_HR/a1-fixed/HRK/ViewRequisitionAvailability-CheckAddressNormalization"
								novalidate=""
								autocomplete="chrome-off"
							>
								{LocationAutocomplete(locationAutocompleteData)}
							</form>
						</div>
					</div>
					<div class="border-top pt-8 md:pt-24">
						<h5 class="mb-2 body-text-l body-text-l--bold">Već jesi A1 korisnik?</h5>
						<p class="body-text-base">
							<a href="#" class="link underline">
								Ulogiraj se
							</a>{" "}
							i provjeri posebnu ponudu samo za tebe ili napravi produljenje postojeće usluge.
						</p>
					</div>
				</div>
			</section>
			<section class="availability-options pt-8 pb-8 md:py-16 md:pt-16 md:pb-16">
				<div class="container container--mid">
					<h2 class="mb-8 title-h3">Trenutne dostupne promocije</h2>
					<div class="row">
						<div class="col-4 col-md-4 col-sm-12 col-xs-12 mb-4">
							<div class="bg-white px-4 py-6 h-100 rounded rounded--medium">
								<h5 class="body-text-l body-text-l--bold mb-2">Super Homebox</h5>
								<p class="body-text-base">
									Prva 3 mjeseca besplatno za nove i postojeće korisnike kod produljenja
									usluge
								</p>
							</div>
						</div>
						<div class="col-4 col-md-4 col-sm-12 col-xs-12 mb-4">
							<div class="bg-white  px-4 py-6 h-100 rounded rounded--medium">
								<h5 class="body-text-l body-text-l--bold mb-2">Kućni internet</h5>
								<p class="body-text-base">
									Besplatnih prvih 6 mjeseci za nove korisnike kod ugovaranja usluge
								</p>
							</div>
						</div>
						<div class="col-4 col-md-4 col-sm-12 col-xs-12 mb-4">
							<div class="bg-white px-4 py-6 h-100 rounded rounded--medium">
								<h5 class="body-text-l body-text-l--bold mb-2">Super Homebox</h5>
								<p class="body-text-base">
									Besplatnih prvih 6 mjeseci za nove korisnike kod ugovaranja usluge
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="contact-section py-8 bg-purple">
				<div class="container container--mid">
					<div
						class="row modal-trigger js-modal-trigger-button"
						data-modal-id="#contact-form-modal-1"
					>
						<div class="col-2 col-sm-1 col-xs-2">
							<div class="d-flex h-100 align-items-center">
								<svg
									width="34"
									height="34"
									viewBox="0 0 34 34"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0.44043 2C0.44043 1.17158 1.10668 0.5 1.92853 0.5H7.51984C9.09847 0.5 10.6125 1.13214 11.7288 2.25735C14.0534 4.6005 14.0534 8.39945 11.7288 10.7426L8.93314 13.5606L6.82866 11.4394L9.62436 8.6213C10.7866 7.44975 10.7866 5.55025 9.62436 4.37869C9.06618 3.81607 8.30918 3.5 7.51984 3.5H3.4551C4.20339 18.0461 15.7717 29.707 30.2023 30.4612V26.3639C30.2023 25.5683 29.8888 24.8053 29.3306 24.2426C28.1684 23.0711 26.2839 23.0711 25.1217 24.2426L22.326 27.0606L20.2215 24.9394L23.0172 22.1213C25.3418 19.7782 29.1105 19.7782 31.4351 22.1213C32.5514 23.2466 33.1785 24.7727 33.1785 26.3639V32C33.1785 32.8284 32.5123 33.5 31.6904 33.5C14.4315 33.5 0.44043 19.397 0.44043 2Z"
										fill="white"
									/>
								</svg>
							</div>
						</div>
						<div class="col-4 col-md-4 col-sm-6 col-xs-8">
							<div>
								<h5 class="mb-1 body-text-l body-text-l--bold text-color-grey-100">
									Nemaš vremena klikati?
								</h5>
								<p class="body-text-base text-color-grey-100">
									<button class="link link--white">Ostavi nam broj</button> da te nazovemo
								</p>
							</div>
						</div>
						<div class="col-1 col-sm-1 col-xs-2">
							<div class="d-flex h-100 align-items-center">
								<svg
									width="8"
									height="12"
									viewBox="0 0 8 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.0651 6.00157L1.85826 11.25L0.742188 10.125L4.83371 6.00075L0.742188 1.875L1.85826 0.75L7.0651 6H7.06659L7.06585 6.00075L7.06659 6.00157H7.0651Z"
										fill="white"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Availability;
