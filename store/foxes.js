export const state = () => ({
	allFoxes: [
		{
			name: "Arabian Red",
			scientificName: "Vulpes Vulpes Arabica",
			descriptions: ["The Arabian red fox is similar in color to the common red fox. However, this fox is more adapted to desert life than its parent species, with its ears being much larger, and its body being much smaller than that of the red fox. The Arabian red fox also has fur between its toes, to prevent burning of the feet. It is brownish pale red in color and weighs approximately 2.7 kg (6.0 lb).", "This fox is a mostly solitary animal, but may form loosely-knit social groups of a few individuals. They are nomadic, temporarily occupying defined home ranges. Its diet consists of rodents, birds, and fish as well as some desert vegetation or even carrion. They are most active at night. The small foxes open the eyes after 10 days from birth. Arabian foxes live in various environments, including mountains, coasts, deserts, and cities."]
		},
		{
			name: "Artic",
			scientificName: "Artic Lagopus",
			descriptions: ["The origins of the Arctic fox have been described by the “out of Tibet” hypothesis. On the Tibetan Plateau, fossils of the extinct ancestral Arctic fox (Vulpes qiuzhudingi) from the early Pliocene (5.08–3.6 MYA) were found along with many other precursors of modern mammals that evolved during the Pliocene (5.3–2.6 MYA).", "It is believed that this ancient fox is the ancestor of the modern Arctic fox. Globally, the Pliocene was about 2–3 °C warmer than today, and the Arctic during the summer in the mid-Pliocene was 8 °C warmer. By using stable carbon and oxygen isotope analysis of fossils, researchers claim that the Tibetan Plateau experienced tundra-like conditions during the Pliocene and harbored cold-adapted mammals that later spread to North America and Eurasia during the Pleistocene Epoch (2.6 million-11,700 years ago)"]
		},
		{
			name: "Fennec",
			scientificName: "Vulpes Zerda",
			descriptions: ["The fennec fox is the smallest of all the world's foxes, but its large ears, measuring 6 inches, appear to be on loan from a bigger relative.", "Their distinctive, batlike ears radiate body heat and help keep the foxes cool. They also have long, thick hair that insulates them during cold nights and protects them from hot sun during the day. Even the fox's feet are hairy, which helps them perform like snowshoes and protects them from extremely hot sand. The fox's feet are also effective shovels for frequent digging—fennec foxes live in underground dens."]
		},
		{
			name: "Gray",
			scientificName: "Urocyon Cinereoargenteus",
			descriptions: ["The gray fox is mainly distinguished from most other canids by its grizzled upper parts, black stripe down its tail and strong neck, while the skull can be easily distinguished from all other North American canids by its widely separated temporal ridges that form a U-shape. There is little sexual dimorphism, save for the females being slightly smaller than males. The gray fox ranges from 76 to 112.5 cm (29.9 to 44.3 in) in total length. The tail measures 27.5 to 44.3 cm (10.8 to 17.4 in) of that length and its hind feet measure 100 to 150 mm (3.9 to 5.9 in). The gray fox typically weighs 3.6 to 7 kg (7.9 to 15.4 lb), though exceptionally can weigh as much as 9 kg (20 lb).", "It is readily differentiated from the red fox by the obvious lack of 'black stockings' that stand out on the latter, a stripe of black hair that runs along the middle of its tail, and individual guard hairs being banded with white, gray, and black. The gray fox displays white on the ears, throat, chest, belly and hind legs. In contrast to all Vulpes and related (Arctic and fennec) foxes, the gray fox has oval (instead of slit-like) pupils"]
		},
		{
			name: "Kit",
			scientificName: "Vulpes Macrotis",
			descriptions: ["The kit fox is the smallest species of the family Canidae found in North America (except for specially bred domestic dog breeds like teacup Yorkshire.) It has large ears, between 71 and 95 mm (2.8 and 3.7 in), that help the fox lower its body temperature and give it exceptional hearing (much like those of the fennec fox). This species exhibits sexual dimorphism, with the male being slightly larger. The average species weight is between 1.6 and 2.7 kg (3.5 and 6.0 lb). The body length is 455 to 535 mm (17.9 to 21.1 in). The tail adds another 250–340 mm (9.8–13.4 in) to its length.", "It usually has a gray coat, with rusty tones, and a black tip to its tail. Unlike the gray fox, it has no stripe along the length of its tail. Its color ranges from yellowish to gray, and the back is usually darker than the majority of its coat; its belly and inner ears are usually lighter. It has distinct dark patches around the nose."]
		},
		{
			name: "Red",
			scientificName: "Vulpes Vulpes",
			descriptions: ["A red fox has a relatively long body with dense fur. The fur is typically a rusty red color, and the legs are darker in color, sometimes even black. Foxes have black pointed ears and long canine teeth. On their underside, the fur is white from their nose down to their belly. A male fox, also called a “dog” weighs 10-12 pounds on average, while the female fox, also known as a “vixen,” weighs 9-10 pounds. A male measures 54”-78” long, and a female measures 56”-74” long. Male foxes tend to have a longer snout as well."]
		},
		{
			name: "Swift",
			scientificName: "Vulpes Velox",
			descriptions: ["The swift fox has a dark, grayish, tan coloration that extends to a yellowish tan color across its sides and legs. The throat, chest, and belly range from pale yellow to white in color. Its tail is black-tipped, and it has black patches on its muzzle. Its ears are noticeably large. It is about 12 inches (30 cm) in height, and 31 inches (79 cm) long, measuring from the head to the tip of the tail, or about the size of a domestic cat. Its weight ranges from around five to seven pounds. Males and females are similar in appearance, although males are slightly larger."]
		},
		{
			name: "Tibetan Sand",
			scientificName: "Vulpes Ferrilata",
			descriptions: ["The Tibetan fox is small and compact, with soft, dense coats and conspicuously narrow muzzles and bushy tails. Its muzzle, crown, neck, back and lower legs are tan to rufous coloured, while its cheeks, flanks, upper legs and rumps are grey. Its tail has white tips. The short ears are tan to greyish tan on the back, while the insides and undersides are white. Adult Tibetan foxes are 60 to 70 centimetres (24 to 28 in), not including tail, and have tail lengths of 29 to 40 cm (11 to 16 in). Weights of adults are usually 4 to 5.5 kg (8.8 to 12.1 lb).", "Among the true foxes, its skull is the most specialised in the direction of carnivory (and looks nothing like the picture in the species box above); it is longer in the condylobasal length and in mandible and cheek tooth length than those of hill foxes. Its cranial region is shorter than that of hill foxes, and the zygomatic arches narrower. Its jaws are also much narrower, and the forehead concave. Its canine teeth are also much longer than those of hill foxes."]
		}
	]
});

export const getters = {
	getFox: (state) => (foxName) => {
		return state.allFoxes.find(fox => fox.name == foxName);
	}
};
