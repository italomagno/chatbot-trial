-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "annotations" JSONB;
ALTER TABLE "Message" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "Message" ADD COLUMN     "data" JSONB;
ALTER TABLE "Message" ADD COLUMN     "function_call" JSONB;
ALTER TABLE "Message" ADD COLUMN     "tool_call_id" STRING;
ALTER TABLE "Message" ADD COLUMN     "tool_calls" JSONB;
ALTER TABLE "Message" ADD COLUMN     "ui" JSONB;
