import {
  areAnagrams
} from './simple-tasks';

function main () {
  console.log(areAnagrams(['abcd', 'bdac', 'cabd']))
  console.log(areAnagrams(['abcd', 'bdXc', 'cabd']))
}

main()