const getTimelineFromLocalDB = () => {
    const allTimeline = localStorage.getItem("timeline");
    if (allTimeline) return JSON.parse(allTimeline)
    return [];
}
const addTimelineToLocalDB = (entry) => {
    const allEntries = getTimelineFromLocalDB();
    allEntries.unshift(entry);
    localStorage.setItem("timeline", JSON.stringify(allEntries));
}

export { getTimelineFromLocalDB, addTimelineToLocalDB }