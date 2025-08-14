import { isAllowedHtmlChild, getTagName } from '@ui';

export function assertIsAllowedHtmlChild(parentTag, childTag) {
  parentTag = getTagName(parentTag);
  childTag = getTagName(childTag);

  if (!isAllowedHtmlChild(parentTag, childTag)) {
    throw new Error(
      `Cannot nest <${childTag}> inside <${parentTag}> — this is prohibited by the rules.`,
    );
  }
}
