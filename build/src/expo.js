"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const expo_server_sdk_1 = require("expo-server-sdk");
/**
 * Create a new Expo SDK client
 * optionally providing an access token if you have enabled push security
 */
const expo = new expo_server_sdk_1.Expo();
/**
 * Create the messages that you want to send to clients
 */
const messages = [];
const sendMessage = (tokens, message, title) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = tokens
        .filter((token) => expo_server_sdk_1.Expo.isExpoPushToken(token))
        .map((token) => {
        return {
            to: token,
            sound: "default",
            body: message,
            title,
        };
    });
    const chunks = expo.chunkPushNotifications(messages);
    const tickets = [];
    for (const chunk of chunks) {
        try {
            const ticketChunk = yield expo.sendPushNotificationsAsync(chunk);
            console.log(ticketChunk);
            tickets.push(...ticketChunk);
            /**
             * NOTE: If a ticket contains an error code in ticket.details.error, you
             * must handle it appropriately. The error codes are listed in the Expo
             * documentation:
             * https://docs.expo.io/push-notifications/sending-notifications/#individual-errors
             */
        }
        catch (error) {
            console.error(error);
        }
    }
});
exports.sendMessage = sendMessage;
// const token = "ExponentPushToken[xqoqqSKDLwBmJtA5-eJ3en]";
for (const pushToken of []) {
    // Each push token looks like ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]
    // Check that all your push tokens appear to be valid Expo push tokens
    if (!expo_server_sdk_1.Expo.isExpoPushToken(pushToken)) {
        console.error(`Push token ${pushToken} is not a valid Expo push token`);
        continue;
    }
    // Construct a message (see https://docs.expo.io/push-notifications/sending-notifications/)
    messages.push({
        to: pushToken,
        sound: "default",
        body: "This is a test notification",
        data: { withSome: "data" },
    });
}
/**
 * The Expo push notification service accepts batches of notifications so
 * that you don't need to send 1000 requests to send 1000 notifications. We
 * recommend you batch your notifications to reduce the number of requests
 * and to compress them (notifications with similar content will get
 * compressed).
 */
const chunks = expo.chunkPushNotifications(messages);
const tickets = [];
(() => __awaiter(void 0, void 0, void 0, function* () {
    /**
     * Send the chunks to the Expo push notification service. There are
     * different strategies you could use. A simple one is to send one chunk at a
     * time, which nicely spreads the load out over time:
     */
    for (const chunk of chunks) {
        try {
            const ticketChunk = yield expo.sendPushNotificationsAsync(chunk);
            console.log(ticketChunk);
            tickets.push(...ticketChunk);
            /**
             * NOTE: If a ticket contains an error code in ticket.details.error, you
             * must handle it appropriately. The error codes are listed in the Expo
             * documentation:
             * https://docs.expo.io/push-notifications/sending-notifications/#individual-errors
             */
        }
        catch (error) {
            console.error(error);
        }
    }
}))();
/**
 * Later, after the Expo push notification service has delivered the
 * notifications to Apple or Google (usually quickly, but allow the the service
 * up to 30 minutes when under load), a "receipt" for each notification is
 * created. The receipts will be available for at least a day; stale receipts
 * are deleted.
 *
 * The ID of each receipt is sent back in the response "ticket" for each
 * notification. In summary, sending a notification produces a ticket, which
 * contains a receipt ID you later use to get the receipt.
 *
 * The receipts may contain error codes to which you must respond. In
 * particular, Apple or Google may block apps that continue to send
 * notifications to devices that have blocked notifications or have uninstalled
 * your app. Expo does not control this policy and sends back the feedback from
 * Apple and Google so you can handle it appropriately.
 */
const receiptIds = [];
for (const ticket of tickets) {
    /**
     * NOTE: Not all tickets have IDs; for example, tickets for notifications
     * that could not be enqueued will have error information and no receipt ID.
     */
    if ("id" in ticket) {
        receiptIds.push(ticket.id);
    }
}
const receiptIdChunks = expo.chunkPushNotificationReceiptIds(receiptIds);
(() => __awaiter(void 0, void 0, void 0, function* () {
    /**
     * Like sending notifications, there are different strategies you could use
     * to retrieve batches of receipts from the Expo service.
     */
    for (const chunk of receiptIdChunks) {
        try {
            const receipts = yield expo.getPushNotificationReceiptsAsync(chunk);
            console.log(receipts);
            /**
             * The receipts specify whether Apple or Google successfully received the
             * notification and information about an error, if one occurred.
             */
            for (const receiptId in receipts) {
                const { status, details } = receipts[receiptId];
                // const { status, details, message } = receipts[receiptId];
                if (status === "ok") {
                    continue;
                }
                else if (status === "error") {
                    console.error(`There was an error sending a notification: some error`
                    // `There was an error sending a notification: ${message}`
                    );
                    if (details && details.error) {
                        /**
                         * The error codes are listed in the Expo documentation:
                         * https://docs.expo.io/push-notifications/sending-notifications/#individual-errors
                         * You must handle the errors appropriately.
                         */
                        console.error(`The error code is ${details.error}`);
                    }
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    }
}))();
//# sourceMappingURL=expo.js.map