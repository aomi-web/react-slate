import { BlockQuoteElementService } from './BlockQuoteElementService';
import { BulletedListElementService } from './BulletedListElementService';
import { HeadingOneElementService } from './HeadingOneElementService';
import { HeadingTwoElementService } from './HeadingTwoElementService';
import { ListItemElementService } from './ListItemElementService';
import { ParagraphElementService } from './ParagraphElementService';
import { NumberedListElementService } from './NumberedListElementService';

export const DEFAULT_ELEMENT_SERVICES = [
  new BlockQuoteElementService(),
  new BulletedListElementService(),
  new HeadingOneElementService(),
  new HeadingTwoElementService(),
  new ListItemElementService(),
  new NumberedListElementService(),
  new ParagraphElementService()
];
