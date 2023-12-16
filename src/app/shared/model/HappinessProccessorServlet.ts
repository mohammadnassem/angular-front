import {Utils} from "./Utils";
import {RequestModel} from "./RequestModel";
import {Header} from "./Header";
import {Transaction} from "./Transaction";
import {Application} from "./Application";
import {User} from "./User";


const SECRET_KEY = "3CB37A76911D3661";
const SERVICE_PROVIDER = "DHA";
const CLIENT_ID = "dhabeatuser";
const themeColor = "0A7ACA";
const emptyString = "";

export const happinessProccessorServlet = (typeFeedback :any,langType:any) => {
  try {
    const requestModel: RequestModel = new RequestModel();
    if (themeColor && themeColor !== emptyString.toString()) {
      requestModel.setHeader(new Header(Utils.getCurrentDate(), SERVICE_PROVIDER, themeColor));
    } else {
      requestModel.setHeader(new Header(Utils.getCurrentDate(), SERVICE_PROVIDER, ""));
    }
    requestModel.getHeader().setMicroApp("micro");
    requestModel.getHeader().setMicroAppDisplay("dsg");
    if (typeFeedback === "1") {
      const transaction: Transaction = new Transaction();
      requestModel.setTransaction(transaction);
    } else {
      const application: Application = new Application();
      requestModel.setApplication(application);
    }
    const user: User = new User();
    user.setSource("ANONYMOUS");
    user.setUsername("");
    user.setEmail("");
    user.setEmiratesID("");
    user.setMobile("");
    requestModel.setUser(user);
    const json = JSON.stringify(requestModel);
    console.log("!!!!!!!!!!!lang!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!:" + langType);
    let lang = "en";
    if (langType && langType === "ar") {
      lang = "ar";
    } else {
      lang = "en";
    }
    console.log("!!!!!!!!!!!json!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!:" + json);
    const timestamp = Utils.getCurrentDate();
     const random = Utils.generate16DigitRandom(16);
    const nonce = Utils.hashSha512(random + "|" + timestamp + "|" + SECRET_KEY);
    console.log("web: json " + json);
    console.log("web: json " + encode(json));
    console.log("web : signature " + Utils.hashSha512(json + "|" + SECRET_KEY));
    console.log("web : signature " + Utils.hashSha512(decode(encode(json)) + "|" + SECRET_KEY));
    console.log("web : CLIENT_ID " + CLIENT_ID);
    console.log("web : Language " + lang);
    console.log("web : random " + random);
    console.log("web : timestamp " + timestamp);
    console.log("web : nonce " + nonce);
    console.log("web : themeColor " + themeColor);

    console.log("json_payload=" + encode(json) + "&signature=" + encode(Utils.hashSha512(json + "|" + SECRET_KEY)) + "&clientId=" + encode(CLIENT_ID) +
      "&lang=" + encode(lang) + "&random=" + encode(random) + "&timestamp=" + encode(timestamp) + "&nonce=" + encode(nonce));

    console.log("web texst",(json + "|" + SECRET_KEY));
    return {
      json: encode(json),
      signature: encode(Utils.hashSha512(json + "|" + SECRET_KEY)),
      clientId: encode(CLIENT_ID),
      lang: encode(lang),
      timestamp: encode(timestamp),
      random: encode(random),
      nonce: encode(nonce),
      type: typeFeedback
    };
  } catch (e) {
    console.error(e);
    return;
  }
}

function encode(string: string): string {
  return   encodeURIComponent(string);
// .replace(/%20/g, '+')
}

function decode(string: string): string | null {
  if (!string) {
    return null;
  }
  return decodeURIComponent(string);
}

console.log(Utils.hashSha512(Utils.generate16DigitRandom(16) + "|" + Utils.getCurrentDate() + "|" + SECRET_KEY));


