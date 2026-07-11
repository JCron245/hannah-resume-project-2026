import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { Impact } from "@/components/Impact";
import { Career } from "@/components/Career";
import { Expertise } from "@/components/Expertise";
import { Earlier } from "@/components/Earlier";
import { Licenses } from "@/components/Licenses";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
	return (
		<>
			<JsonLd />
			<Hero />
			<Profile />
			<Impact />
			<Career />
			<Earlier />
			<Expertise />
			<Licenses />
			<Education />
			<Contact />
		</>
	);
}
