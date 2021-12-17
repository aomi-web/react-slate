import { BlockQuoteElementService } from './BlockQuoteElementService';
import { BulletedListElementService } from './BulletedListElementService';
import { HeadingOneElementService } from './HeadingOneElementService';
import { HeadingTwoElementService } from './HeadingTwoElementService';
import { ListItemElementService } from './ListItemElementService';
import { ParagraphElementService } from './ParagraphElementService';
import { NumberedListElementService } from './NumberedListElementService';
import { MediaElementService } from './MediaElementService';

export const NATIVE_DEFAULT_ELEMENT_SERVICES = [
  new BlockQuoteElementService(),
  new BulletedListElementService(),
  new HeadingOneElementService(),
  new HeadingTwoElementService(),
  new ListItemElementService(),
  new MediaElementService(),
  new NumberedListElementService(),
  new ParagraphElementService()
];
