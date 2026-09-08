const trainingSessions = new Map();

export function setTrainingScenario(guildId, userId, scenario) {
    trainingSessions.set(`${guildId}:${userId}`, {
        scenario,
        createdAt: Date.now()
    });
}

export function getTrainingScenario(guildId, userId) {
    const session = trainingSessions.get(`${guildId}:${userId}`);

    if (!session) {
        return null;
    }

    // Expire training sessions after 15 minutes
    if (Date.now() - session.createdAt > 15 * 60 * 1000) {
        trainingSessions.delete(`${guildId}:${userId}`);
        return null;
    }

    return session.scenario;
}

export function clearTrainingScenario(guildId, userId) {
    trainingSessions.delete(`${guildId}:${userId}`);
}
