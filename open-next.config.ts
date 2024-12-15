import type { OpenNextConfig } from '@opennextjs/aws/types/open-next.js'
export default {
    default: {
        override: {
            tagCache: 'dynamodb-lite',
            incrementalCache: 's3-lite',
            queue: 'sqs-lite',
        },
    },
    warmer: {
        invokeFunction: 'dummy'
    }
} satisfies OpenNextConfig;