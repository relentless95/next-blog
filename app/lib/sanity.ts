import { createClient } from "next-sanity"

const projectId = 'kbhnruo7'
const dataset='production' // from the sanity command when installing
const apiVersion = "2023-01-01"

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})
