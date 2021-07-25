export default class APIService {
    static InsertTask(body) {
        return fetch('http://127.0.0.1:8000/api/todos/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static UpdateTask(id, body) {
        return fetch(`http://127.0.0.1:8000/api/todos/${id}/`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }
}