module.exports = {
    client: {
        token: '', // ← Your bot token (.env IS RECOMMENDED)
        id: '1354494077437219008' // ← Your bot ID
    },
    modmail: {
        guildId: '1315655498581676052', // ← Your server ID
        categoryId: '1356682208735133756', // ← The modmail category ID
        staffRoles: ['1329023423736844329'], // ← The modmail staff roles IDs
        mentionStaffRolesOnNewMail: true // ← Mention staff roles when there is a new mail?
    },
    logs: {
        webhookURL: '' // ← The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
    }
};
