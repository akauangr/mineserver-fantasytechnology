// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('KubeJs >>> Mini bosses so aparecerao de noite.')

let nightTime = [12500, 23000]

let blockInDayTime = [
    'born_in_chaos_v1:sir_',
    'born_in_chaos_v1:mr_',
    'born_in_chaos_v1:felsteed',
    'born_in_chaos_v1:missioner',
]

EntityEvents.spawned(e => {
    if (e.level.isDay()) {
        blockInDayTime.forEach((blocked) => {
            if (String(e.entity.type).startsWith(blocked)) {
                //e.server.runCommandSilent(`/say Killed ` + e.entity.type);
                e.entity.setY(-300);
                e.entity.kill();
            }
        })
    }
})