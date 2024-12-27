export function findInAgenda(agenda, phone) {
    const contact = agenda.split('>')
        .map(m => {
            const [phonedirection, name] = m.split('<');
            const [_, phone, address] = phonedirection.match(/^(\+\d{1,3}-\d{3}-\d{3}-\d{3})(\s(.+))$/) || []
            return { name, phone, address }

        })
        .find(f => f.phone.includes(phone));
    return Object.keys(contact).length ? { name: contact.name, address: contact.address.trim() } : null
}
