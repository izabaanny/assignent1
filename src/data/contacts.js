import ppGirl1 from "images/anne.jpg";
import ppGirl2 from "images/nn.jpg";
import ppGirl3 from "images/anne.jpg";
import ppGirl4 from "images/nn.jpg";
import ppBoy1 from "images/anne.jpg";
import ppBoy2 from "images/nn.jpg";
import ppBoy3 from "images/anne.jpg";
import getRandomSentence from "utils/getRandomSentence";

const users = [
	{
		id: 1,
		profile_picture: ppGirl3,
		name: "Mama",
		phone_number: "+25078095346",
		whatsapp_name: "mama",
		unread: 3,
		messages: {
			"04/06/2023": [
				{
					content: getRandomSentence(),
					sender: 1,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 1,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:10:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "08:11:26",
					status: null,
				},
				
				{
					content: getRandomSentence(),
					sender: 1,
					time: "09:20:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "09:21:26",
					status: null,
				},
			],
		},
		group: false,
		pinned: true,
		typing: false,
	},
	{
		id: 2,
		profile_picture: ppGirl2,
		name: "Anny",
		phone_number: "+250792354678",
		whatsapp_name: "Anny.",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 2,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 2,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 2,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 2,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 2,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 2,
					time: "09:11:26",
					status: null,
				},
			],
		},
		group: false,
		pinned: false,
		typing: false,
	},
	{
		id: 3,
		profile_picture: ppGirl1,
		name: "  my brother",
		phone_number: "+2507923456789",
		whatsapp_name: "my brother",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 3,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 3,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "sent",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 3,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 3,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 3,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
			
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "sent",
				},
			],
		},
		group: false,
		pinned: false,
		typing: false,
	},
	{
		id: 4,
		profile_picture: ppBoy2,
		name: "sonia  ",
		phone_number: "+2507923456789",
		whatsapp_name: "sonia",
		unread: 1,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 4,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 4,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 4,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
			],
		},
		group: false,
		pinned: false,
		typing: false,
	},

	{
		id: 5,
		profile_picture: ppBoy1,
		name: "Dada  ",
		phone_number: "+2348123456789",
		whatsapp_name: "Dada",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 5,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 5,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 5,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 5,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 5,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 5,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],
		},
		group: false,
		pinned: false,
		typing: false,
	},
	{
		id: 6,
		profile_picture: ppBoy3,
		name: "keke  ",
		phone_number: "+2507912345678 ",
		whatsapp_name: "keke",
		unread: 3,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 6,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 6,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 6,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
			],
		},
		group: false,
		pinned: false,
		typing: false,
	},

	{
		id: 7,
		profile_picture: ppGirl3,
		name: "Lily",
		phone_number: "+2507912345678 ",
		whatsapp_name: "Lily",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 7,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 7,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 7,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 7,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 7,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],
		},
		group: false,
		pinned: false,
		typing: false,
	},

{
		id: 8,
		profile_picture: ppGirl4,
		name: "aunt",
		phone_number: "+2507912345678 ",
		whatsapp_name: "aunt",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 8,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 8,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 8,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],
		},
		group: false,
		pinned: false,
		typing: false,
	},
];

export default users;
