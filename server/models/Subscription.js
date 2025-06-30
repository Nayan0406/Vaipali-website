import mongoose from 'mongoose'

const SubscriptionSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, { timestamps: true });

export default mongoose.model("Subscription", SubscriptionSchema);
