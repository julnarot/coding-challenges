export function findInAgenda(agenda, phone) {
    const phonePattern = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/;
    const namePatter = /\<([^)]+)\>/;
    const contacts = agenda.split('\n')
        .map(m => {
            const phoneMatch = m.match(phonePattern);
            const nameMatch = m.match(namePatter);
            const namePosix = Array.from({ length: nameMatch[0].length }).map((_, i) => {
                return { type: 'name', index: nameMatch.index + i }
            })
            const phonePosix = Array.from({ length: phoneMatch[0].length }).map((_, i) => {
                return { type: 'phone', index: phoneMatch.index + i }
            })
            const todo = [...phonePosix, ...namePosix];
            const contactObj = {}
            Array.from({ length: m.length }).map((_, i) => {
                const obj = todo.find(f => f.index === i);
                if (obj) {
                    return obj
                }
                return {
                    index: i,
                    type: 'address'
                }
            }).forEach(fe => {
                if (contactObj.hasOwnProperty(fe.type)) {
                    contactObj[fe.type] = [...contactObj[fe.type], m.charAt(fe.index)].join("");
                } else {
                    contactObj[fe.type] = [m.charAt(fe.index)];
                }
            });
            return contactObj;
        })
        .filter(f => f.phone.includes(phone));
    if (contacts.length === 1) {
        const contact = contacts[0];
        return contact && Object.keys(contact).length ?
            {
                name: contact.name.substring(1, contact.name.length - 1),
                address: contact.address ? contact.address.trim() : null
            }
            : null
    }
    return null;
}
