import axios from 'axios';
import xml2js from 'xml2js';
import { groupBy, map } from 'ramda';

export const BUCKET_URL = 'https://guitar-site.fra1.cdn.digitaloceanspaces.com';

export const fetchBucketFiles = async () => {
  const { data } = await axios.get(BUCKET_URL);

  // destructure Conents from the xml, rest is metadata about the space/bucket
  const { ListBucketResult: { Contents } } = await xml2js.parseStringPromise(data);

  // key and LastModified contain the filename and the lastModified date so we can sort by newest
  // rest of the object is other metadata we don't need
  const fileNames = Contents.map(({ Key, LastModified }) => ({ filename: Key[0], lastModified: LastModified[0] }));

  // groupBy folder name, use custom function to return folders into the "folder": key
  // e.g chords/one.m4a will go into {"chords": "chords/one.m4a"}
  const groupedFiles = groupBy(({ filename }) => {
    if (filename.endsWith('/')) return 'folder';
    const [folder] = filename.split('/');
    return folder;
  }, fileNames);

  // remap each of the arrays in the object from ["chords/chord.m4a"] to [{url: "https://..../chords/d-chord.m4a", title: "d-chord"}]
  const renamedFiles = map(map(({ filename, lastModified }) => {
    // split between the / and the file extension .
    const split = filename.split(/[/.]/);

    // get the 2nd last element, the last element (the filename), last is the file extension
    const title = split[split.length - 2];

    const url = `${BUCKET_URL}/${filename}`;

    // return a url and the title so we can easily display it in the UI
    return { url, title, lastModified };
  }), groupedFiles);

  // {chords: [{url: "...",  title:"..."}], songs: [{...}]}
  return renamedFiles;
};
