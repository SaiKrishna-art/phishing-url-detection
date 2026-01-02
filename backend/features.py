def extract_features(url: str):
    url_length = len(url)
    dot_count = url.count('.')
    has_at_symbol = 1 if '@' in url else 0
    has_hyphen = 1 if '-' in url else 0
    has_https = 1 if url.startswith("https") else 0
    return [
        url_length,
        dot_count,
        has_at_symbol,
        has_hyphen,
        has_https
    ]