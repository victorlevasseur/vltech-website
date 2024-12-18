import type { OpenNextConfig } from '@opennextjs/aws/types/open-next.js'
export default {
    default: {
        override: {
            tagCache: 'dynamodb-lite',
            incrementalCache: 's3-lite',
            queue: 'sqs-lite',
        },
    },
    buildCommand: 'yarn run next:build',
    warmer: {
        invokeFunction: 'dummy'
    }
} satisfies OpenNextConfig;