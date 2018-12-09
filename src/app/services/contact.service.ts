import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts = [
    {
      "name": "Jacob",
      "phone": "1-160-145-6885"
    },
    {
      "name": "September",
      "phone": "1-605-749-5979"
    },
    {
      "name": "Eagan",
      "phone": "110-4789"
    },
    {
      "name": "Kylee",
      "phone": "211-3712"
    },
    {
      "name": "Myra",
      "phone": "386-7434"
    },
    {
      "name": "Fay",
      "phone": "925-3240"
    },
    {
      "name": "Lillian",
      "phone": "761-2989"
    },
    {
      "name": "Hedley",
      "phone": "1-249-603-5239"
    },
    {
      "name": "April",
      "phone": "1-902-399-9725"
    },
    {
      "name": "Halee",
      "phone": "1-307-330-9584"
    },
    {
      "name": "Aaron",
      "phone": "1-461-855-7878"
    },
    {
      "name": "Simone",
      "phone": "1-740-207-6156"
    },
    {
      "name": "Hakeem",
      "phone": "662-0767"
    },
    {
      "name": "Angelica",
      "phone": "125-7152"
    },
    {
      "name": "Luke",
      "phone": "1-833-489-5067"
    },
    {
      "name": "Leigh",
      "phone": "1-638-412-8424"
    },
    {
      "name": "Yolanda",
      "phone": "1-127-918-9495"
    },
    {
      "name": "Myra",
      "phone": "713-1369"
    },
    {
      "name": "Basil",
      "phone": "1-437-314-3277"
    },
    {
      "name": "Ashely",
      "phone": "1-337-745-1069"
    },
    {
      "name": "Charlotte",
      "phone": "680-9666"
    },
    {
      "name": "Whoopi",
      "phone": "929-1082"
    },
    {
      "name": "Curran",
      "phone": "1-902-538-4884"
    },
    {
      "name": "Hamilton",
      "phone": "1-848-955-6032"
    },
    {
      "name": "David",
      "phone": "1-541-611-7225"
    },
    {
      "name": "Brent",
      "phone": "1-137-566-7076"
    },
    {
      "name": "Aidan",
      "phone": "1-351-257-9580"
    },
    {
      "name": "Oren",
      "phone": "1-713-889-7652"
    },
    {
      "name": "Germane",
      "phone": "1-965-123-3902"
    },
    {
      "name": "Emerald",
      "phone": "562-2276"
    },
    {
      "name": "Omar",
      "phone": "1-292-140-4993"
    },
    {
      "name": "Wyoming",
      "phone": "563-4625"
    },
    {
      "name": "Violet",
      "phone": "1-390-652-5500"
    },
    {
      "name": "Callie",
      "phone": "191-9656"
    },
    {
      "name": "Lane",
      "phone": "527-3767"
    },
    {
      "name": "Rachel",
      "phone": "652-3271"
    },
    {
      "name": "Sylvia",
      "phone": "829-9663"
    },
    {
      "name": "Jeremy",
      "phone": "845-7950"
    },
    {
      "name": "Jessica",
      "phone": "184-5091"
    },
    {
      "name": "Halla",
      "phone": "381-2444"
    },
    {
      "name": "Arsenio",
      "phone": "1-317-107-0920"
    },
    {
      "name": "Juliet",
      "phone": "122-0119"
    },
    {
      "name": "Martina",
      "phone": "1-483-950-1864"
    },
    {
      "name": "Maggy",
      "phone": "1-181-306-6437"
    },
    {
      "name": "Wanda",
      "phone": "1-490-854-6274"
    },
    {
      "name": "Lara",
      "phone": "804-3351"
    },
    {
      "name": "Ulric",
      "phone": "595-9676"
    },
    {
      "name": "Hilda",
      "phone": "996-3062"
    },
    {
      "name": "Charde",
      "phone": "824-8641"
    },
    {
      "name": "Joseph",
      "phone": "150-5239"
    },
    {
      "name": "Lois",
      "phone": "1-700-650-0886"
    },
    {
      "name": "Jordan",
      "phone": "593-4392"
    },
    {
      "name": "Olga",
      "phone": "404-5100"
    },
    {
      "name": "Buckminster",
      "phone": "1-810-273-9968"
    },
    {
      "name": "Hanna",
      "phone": "1-402-233-9789"
    },
    {
      "name": "Lane",
      "phone": "1-702-468-0158"
    },
    {
      "name": "Illana",
      "phone": "1-703-498-8076"
    },
    {
      "name": "Justine",
      "phone": "876-6826"
    },
    {
      "name": "Leah",
      "phone": "1-569-290-3223"
    },
    {
      "name": "Yuri",
      "phone": "320-4163"
    },
    {
      "name": "Rajah",
      "phone": "960-7121"
    },
    {
      "name": "Lavinia",
      "phone": "1-691-264-5662"
    },
    {
      "name": "Griffin",
      "phone": "630-1028"
    },
    {
      "name": "Remedios",
      "phone": "210-4898"
    },
    {
      "name": "Shoshana",
      "phone": "813-2492"
    },
    {
      "name": "Carter",
      "phone": "881-0947"
    },
    {
      "name": "Berk",
      "phone": "681-5438"
    },
    {
      "name": "Arthur",
      "phone": "717-9308"
    },
    {
      "name": "Noble",
      "phone": "115-1147"
    },
    {
      "name": "Colt",
      "phone": "1-882-935-6546"
    },
    {
      "name": "Portia",
      "phone": "236-8913"
    },
    {
      "name": "Kevin",
      "phone": "979-5791"
    },
    {
      "name": "Lucian",
      "phone": "697-5086"
    },
    {
      "name": "Daria",
      "phone": "165-3727"
    },
    {
      "name": "Damian",
      "phone": "1-466-267-4754"
    },
    {
      "name": "Rae",
      "phone": "575-0314"
    },
    {
      "name": "Addison",
      "phone": "1-418-760-5771"
    },
    {
      "name": "Kennedy",
      "phone": "284-8557"
    },
    {
      "name": "Reagan",
      "phone": "251-1974"
    },
    {
      "name": "Burton",
      "phone": "1-187-870-2325"
    },
    {
      "name": "Hedwig",
      "phone": "990-6991"
    },
    {
      "name": "Piper",
      "phone": "769-8637"
    },
    {
      "name": "Ciaran",
      "phone": "1-693-962-3805"
    },
    {
      "name": "Daryl",
      "phone": "1-181-481-8311"
    },
    {
      "name": "Gretchen",
      "phone": "824-8511"
    },
    {
      "name": "Yael",
      "phone": "372-1877"
    },
    {
      "name": "Leroy",
      "phone": "1-123-830-4592"
    },
    {
      "name": "Demetria",
      "phone": "434-8001"
    },
    {
      "name": "Baxter",
      "phone": "420-9039"
    },
    {
      "name": "Cally",
      "phone": "336-9225"
    },
    {
      "name": "Zia",
      "phone": "1-328-804-0966"
    },
    {
      "name": "Harding",
      "phone": "1-987-799-2920"
    },
    {
      "name": "Kenneth",
      "phone": "910-0567"
    },
    {
      "name": "Upton",
      "phone": "1-700-917-1661"
    },
    {
      "name": "Ocean",
      "phone": "720-4755"
    },
    {
      "name": "Farrah",
      "phone": "1-564-356-9094"
    },
    {
      "name": "Scarlet",
      "phone": "463-3299"
    },
    {
      "name": "Susan",
      "phone": "122-9927"
    },
    {
      "name": "Tobias",
      "phone": "103-9704"
    },
    {
      "name": "Martha",
      "phone": "339-7100"
    }
  ];

  constructor() { }

  fetch() {
    return new Promise ( (resolve, reject) => {
      resolve(this.contacts);
    });
  }
}
