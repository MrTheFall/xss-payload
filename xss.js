const headers = new Headers({
        'Content-Type': 'application/vnd.api+json',
    });
    fetch("/api/password/update", {
        method: 'POST',
        headers,
        credentials: 'include',
        body: JSON.stringify({
            password: '123123',
        })
    });