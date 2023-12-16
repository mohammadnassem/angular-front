import {SHA512,enc} from 'crypto-js';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export class Utils {
  private static DATE_FORMAT = "dd/MM/yyyy HH:mm:ss";
  //
  // public static getCurrentDate(): string {
  //   const sdf = new Intl.DateTimeFormat('en-US', {
  //     day: '2-digit',
  //     month: '2-digit',
  //     year: 'numeric',
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit',
  //     timeZone: 'UTC'
  //   });
  //   const cc = new Date();
  //   const format = sdf.format(cc);
  //   return format;
  // }

  // public static hashSha512(text: string): string {
  //   const md = crypto.createHash('sha512');
  //   md.update(text, 'utf8');
  //   const byteData = md.digest();
  //
  //   const sb = [];
  //   for (let i = 0; i < byteData.length; i++) {
  //     sb.push((byteData[i] & 0xff + 0x100).toString(16).substring(1));
  //   }
  //   return sb.join('');
  // }

  // public static generate16DigitRandom(): string {
  //   const rand = randomBytes(8);
  //   let accumulator = 1 + rand.readUInt32BE(0) % 9;
  //
  //   for (let i = 0; i < 15; i++) {
  //     accumulator *= 10;
  //     accumulator += rand.readUInt32BE(i) % 10;
  //   }
  //   const val = String(accumulator);
  //   return val;
  // }


  public static getCurrentDate(): string{
    const date = utcToZonedTime(new Date(), "UTC");
    const formattedDate = format(date,Utils.DATE_FORMAT);
    return formattedDate;
  }

  public static hashSha512(text: string): string {
    try {
      const wordArray = SHA512(text,{encoding:enc.Utf8});
      const byteData = wordArray.toString();
      return  byteData;
    //  const sb = [];
      // for (let i = 0; i < byteData.length; i++) {
      //   sb.push((byteData[i] & 0xff + 0x100).toString(16).substring(1));
      // }
      // return sb.join('');
    } catch (error) {
      console.error(error);
    }
    return '';
  }

  public static  generate16DigitRandom(length: number): string {
    const characters = '0123456789ABCDEF';
    let randomString = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }

    return randomString;
  }

  // public static generate16DigitRandom(): string {
  //   const values = new Uint8Array(16);
  //   crypto.getRandomValues(values);
  //
  //   let accumulator = 1 + values[0] % 9; // ensures that the 16th digit isn't 0
  //
  //   for (let i = 1; i < 16; i++) {
  //     accumulator *= 10;
  //     accumulator += values[i] % 10;
  //   }
  //
  //   const val = String(accumulator);
  //   return val;
  // }

}

 export function randomBytes(length: number): Uint8Array  {
  const values = new Uint8Array(length);
  window.crypto.getRandomValues(values);
  return values;
}
