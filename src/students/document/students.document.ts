import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class StudentClass extends Document {
    @Prop()
    _id: Types.ObjectId;

    @Prop({ required: true })
    id!: number;

    @Prop()
    username?: string;

    @Prop({ required: true })
    name!: string;

    @Prop()
    problems?: number;

    @Prop()
    solves?: number;

    @Prop({ type: { country: String, city: String } })
    location?: {
        country: string;
        city: string;
    };

    @Prop({ required: true })
    specialization!: string;

    @Prop({ required: true })
    group!: string;
}

export type StudentDocument = StudentClass & Document;
export const StudentSchema = SchemaFactory.createForClass(StudentClass);
