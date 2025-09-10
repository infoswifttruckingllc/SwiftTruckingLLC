import { useEffect } from 'react';

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

type SEOProps = {
    title?: string;
    description?: string;
    canonical?: string;
    keywords?: string[];
    ogImage?: string;
    jsonLd?: JsonLd;
};

/**
 * Lightweight SEO helper that manipulates document head.
 * Use on a per-page basis to set meta tags and structured data.
 */
export function SEO({ title, description, canonical, keywords, ogImage, jsonLd }: SEOProps) {
    useEffect(() => {
        if (title) {
            document.title = title;
            setMeta('og:title', title, true);
            setMeta('twitter:title', title, true);
        }
        if (description) {
            setMetaName('description', description);
            setMeta('og:description', description, true);
            setMeta('twitter:description', description, true);
        }
        if (canonical) {
            setCanonical(canonical);
            setMeta('og:url', canonical, true);
            setMeta('twitter:url', canonical, true);
        }
        if (Array.isArray(keywords) && keywords.length > 0) {
            setMetaName('keywords', keywords.join(', '));
        }
        if (ogImage) {
            setMeta('og:image', ogImage, true);
            setMeta('twitter:image', ogImage, true);
        }
        if (jsonLd) {
            setJsonLd(jsonLd);
        }
    }, [title, description, canonical, JSON.stringify(keywords), ogImage, JSON.stringify(jsonLd)]);

    return null;
}

function setMetaName(name: string, content: string) {
    let tag = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
}

function setMeta(propertyOrName: string, content: string, isProperty = false) {
    const attr = isProperty ? 'property' : 'name';
    let tag = document.head.querySelector(`meta[${attr}="${propertyOrName}"]`) as HTMLMetaElement | null;
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, propertyOrName);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
}

function setCanonical(href: string) {
    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
    }
    link.setAttribute('href', href);
}

function setJsonLd(data: JsonLd) {
    // Remove existing JSON-LD injected by this component
    const existing = Array.from(document.head.querySelectorAll('script[type="application/ld+json"][data-seo="jsonld"]'));
    existing.forEach((el) => el.parentElement?.removeChild(el));

    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-seo', 'jsonld');
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
}


