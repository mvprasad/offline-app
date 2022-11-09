import { Injectable } from '@angular/core';
declare var Dexie: any;
@Injectable({
  providedIn: 'root'
})
export class DexieService {
  db;
  constructor() { 
    this.db = new Dexie("NCD_DB");
      this.db.version(1).stores({
        users: "++id,uid,username,gender,phone_number,email"
      });
  }
  async bulkAddUsers() {
    const resp = await this.db.users.bulkAdd([{
      "email": "anton.christensen@example.com",
      "gender": "male",
      "phone_number": "80126212",
      "username": "heavytiger158",
    },
    {
      "email": "leo.abraham@example.com",
      "gender": "male",
      "phone_number": "122-307-5945",
      "username": "lazylion665",
    },
    {
      "email": "cindy.perez@example.com",
      "gender": "female",
      "phone_number": "(039)-560-6844",
      "username": "ticklishpanda180",
    },
    {
      "email": "malthe.andersen@example.com",
      "gender": "male",
      "phone_number": "12918640",
      "username": "crazyfish482",
    },
    {
      "email": "melissa.fritz@example.com",
      "gender": "female",
      "phone_number": "0171-5413142",
      "username": "purplefish635",
    },
    {
      "email": "anna.miller@example.com",
      "gender": "female",
      "phone_number": "0757-774-062",
      "username": "orangemouse723",
    },
    {
      "email": "theo.bader@example.com",
      "gender": "male",
      "phone_number": "0173-7423089",
      "username": "orangetiger943",
    },
    {
      "email": "sara.johansen@example.com",
      "gender": "female",
      "phone_number": "52918686",
      "username": "tinywolf270",
    },
    {
      "email": "stephanie.lawson@example.com",
      "gender": "female",
      "phone_number": "081-904-6460",
      
      "username": "greenelephant794",
    },
    {
      "email": "edgar.shelton@example.com",
      "gender": "male",
      "phone_number": "0467-658-105",
      "username": "tinyswan868",
    },
    {
      "email": "edgar.friedrich@example.com",
      "gender": "male",
      "phone_number": "0174-6711492",
      "username": "purplebear225",
    },
    {
      "email": "alysha.vande westelaken@example.com",
      "gender": "female",
      "phone_number": "(841)-927-0719",
      "username": "brownelephant697",
    },
    {
      "email": "léonard.arnaud@example.com",
      "gender": "male",
      "phone_number": "06-29-05-29-92",
      "username": "smallleopard952",
    },
    {
      "email": "julia.cano@example.com",
      "gender": "female",
      "phone_number": "614-327-163",
      "username": "tinypanda172",
    },
    {
      "email": "donald.riley@example.com",
      "gender": "male",
      "phone_number": "(804)-650-8144",
      "username": "browngoose143",
    },
    {
      "email": "justin.harcourt@example.com",
      "gender": "male",
      "phone_number": "645-852-4078",
      "username": "beautifulbutterfly981",
    },
    {
      "email": "femia.pruijssers@example.com",
      "gender": "female",
      "phone_number": "(328)-454-1571",
      "username": "greenswan233",
    },
    {
      "email": "andrea.hernandez@example.com",
      "gender": "female",
      "phone_number": "649-994-475",
      "username": "redduck501",
    },
    {
      "email": "gilbert.willis@example.com",
      "gender": "male",
      "phone_number": "(016)-019-8853",
      "username": "bluebear261",
    },
    {
      "email": "mia.sanchez@example.com",
      "gender": "female",
      "phone_number": "0729-610-908",
      "username": "whiteswan766",
    },
    {
      "email": "peter.bell@example.com",
      "gender": "male",
      "phone_number": "0745-196-827",
      "username": "yellowladybug664",
    },
    {
      "email": "guillermo.saez@example.com",
      "gender": "male",
      "phone_number": "686-658-217",
      "username": "redduck278",
    },
    {
      "email": "nella.kangas@example.com",
      "gender": "female",
      "phone_number": "044-023-32-46",
      "username": "goldengorilla897",
    },
    {
      "email": "gregory.fleming@example.com",
      "gender": "male",
      "phone_number": "(544)-797-0164",
      "username": "orangeswan718",
    },
    {
      "email": "emma.manni@example.com",
      "gender": "female",
      "phone_number": "043-835-10-98",
      "username": "tinymouse476",
    },
    {
      "email": "ستایش.یاسمی@example.com",
      "gender": "female",
      "phone_number": "0930-256-0917",
      "username": "silverostrich141",
    },
    {
      "email": "rita.rezende@example.com",
      "gender": "female",
      "phone_number": "(42) 6069-0555",
      "username": "yellowlion723",
    },
    {
      "email": "alexis.faure@example.com",
      "gender": "male",
      "phone_number": "06-45-22-40-00",
      "username": "orangepeacock394",
    },
    {
      "email": "darius.conrad@example.com",
      "gender": "male",
      "phone_number": "0171-7784156",
      
      "username": "smallgorilla954",
    },
    {
      "email": "alma.thomsen@example.com",
      "gender": "female",
      "phone_number": "85041366",
      "username": "tinyfish204",
    },
    {
      "email": "volkan.tazegül@example.com",
      "gender": "male",
      "phone_number": "(320)-301-1432",
      "username": "beautifuldog103",
    },
    {
      "email": "leo.pierce@example.com",
      "gender": "male",
      "phone_number": "0737-232-385",
      "username": "blackfish735",
    },
    {
      "email": "tammy.bowman@example.com",
      "gender": "female",
      "phone_number": "081-064-2923",
      "username": "orangeduck243",
    },
    {
      "email": "charlotte.lee@example.com",
      "gender": "female",
      "phone_number": "(290)-731-9178",
      "username": "lazytiger506",
    },
    {
      "email": "karen.stanley@example.com",
      "gender": "female",
      "phone_number": "081-988-5646",
      "username": "heavyrabbit592",
    },
    {
      "email": "sheryl.carr@example.com",
      "gender": "female",
      "phone_number": "0731-134-689",
      "username": "redbear154",
    },
    {
      "email": "miguel.sanz@example.com",
      "gender": "male",
      "phone_number": "636-912-353",
      "username": "silverfrog877",
    },
    {
      "email": "cassandre.leroux@example.com",
      "gender": "female",
      "phone_number": "06-09-96-38-18",
      "username": "bigwolf469",
    },
    {
      "email": "benjamin.beck@example.com",
      "gender": "male",
      "phone_number": "0459-316-814",
      "username": "ticklishrabbit361",
    },
    {
      "email": "emeline.charles@example.com",
      "gender": "female",
      "phone_number": "(311)-279-7621",
      "username": "heavyfish951",
    },
    {
      "email": "alizee.leroux@example.com",
      "gender": "female",
      "phone_number": "06-89-25-69-04",
      "username": "brownmeercat168",
    },
    {
      "email": "nicole.curtis@example.com",
      "gender": "female",
      "phone_number": "081-784-8292",
      "username": "goldenbutterfly133",
    },
    {
      "email": "becky.holmes@example.com",
      "gender": "female",
      "phone_number": "081-326-3849",
      "username": "heavypeacock278",
    },
    {
      "email": "mathew.richards@example.com",
      "gender": "male",
      "phone_number": "0457-239-253",
      "username": "blackpeacock624",
    },
    {
      "email": "james.warren@example.com",
      "gender": "male",
      "phone_number": "0789-598-522",
      "username": "ticklishbird503",
    },
    {
      "email": "kasper.klessens@example.com",
      "gender": "male",
      "phone_number": "(958)-321-7397",
      "username": "silverlion762",
    },
    {
      "email": "mia.li@example.com",
      "gender": "female",
      "phone_number": "168-828-2650",
      "username": "organicrabbit832",
      
    },
    {
      "email": "mustafa.hamzaoğlu@example.com",
      "gender": "male",
      "phone_number": "(645)-838-2501",
      "username": "whitegoose675",
    }])
    return resp;
  }
  async addUser(user) {
    const response = await this.db.users.add(user);
    return response;
  }
  async getUsers() {
    return await this.db.users.toArray();
  }
  async getUserById(id) {
    return await this.db.users.filter((item) => item.id == id).toArray();
  }
  async updateUser(user) {
    const response = await this.db.users.update(user.id, user);
    return response;
  }
 async searchUser(val) {
  return await this.db.users.filter((item) => item.username.includes(val)).toArray();
 }
}
