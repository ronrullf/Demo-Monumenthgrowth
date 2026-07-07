import { site } from "../config/site";

export function whatsappHref(customText?: string): string {
  const text = encodeURIComponent(customText ?? site.whatsappPrefill);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export function telHref(): string {
  return `tel:${site.phoneHref}`;
}
