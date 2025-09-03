import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    tumbnail: { type: String, required: true },
    modules: { type: String, required: true },
    instructor: { type: String, required: true },
    duration: { type: Number, required: true }, // duration in hours
    createdAt: { type: Date, default: Date.now }
});

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

export default Course;