import { convert } from '@rinova/proxy-sdk';
import { writeFileSync } from 'fs';

// Replace with your actual URL
const { yaml } = await convert('https://79878.no-mad-sub.one/link/1dz1qIOPeRo2SaQl?clash=3&extend=1');
writeFileSync('clash.yaml', yaml);
console.log('Config file saved as clash.yaml');