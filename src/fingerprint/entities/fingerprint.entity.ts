import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'beneficiaries', name: 'fingerprints' })
export class Fingerprint {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    url: string;

    @Column('int')
    quality: number;

    @Column('int')
    finger_id: number;
}
