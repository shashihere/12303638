//dummy data is used here for the frontend display
exports.getNotifications= async(req,res)=> { //this controller function will be used for sending the notification the users
    const notifications = [
        {
            ID: "1",
            Type: "Placement",
            Message: "Google Hiring Drive",
            Timestamp: "2026-04-22 10:30 AM",
            isRead: false
        },
        {
            ID: "2",
            Type: "Result",
            Message: "Mid Sem Results Published",
            Timestamp: "2026-04-21 09:00 AM",
            isRead: true
        },
        {
            ID: "3",
            Type: "Event",
            Message: "Hackathon Tomorrow",
            Timestamp: "2026-04-20 05:00 PM",
            isRead: false
        },
        {
            ID: "4",
            Type: "Placement",
            Message: "Microsoft Hiring",
            Timestamp: "2026-04-19 01:00 PM",
            isRead: true
        }
    ];
    res.json({
        notifications
    });
};