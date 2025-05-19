export async function loadContent() {
    try {
        const response = await fetch('/data/data.json');

        if (!response.ok) {
            throw new Error(`Error in fetch: status ${response.status}`);
        }

        const data = await response.json();
        
        return data;

    } catch (err) {
        console.error('Error in getContent, err =', err);
        return null;
    }

}