// zoo.ts
// ==============================================
// Interfaces
// ==============================================

export interface IAnimal {
    name: string;            // Tên / Name
    age: number;             // Tuổi / Age
    category: string;        // Thể loại / Category (mammal, bird, reptile...)
    sound(): string;         // Âm thanh / Sound
    getDetails(): string;    // Thông tin chi tiết / Detailed info
    move(): string;          // Di chuyển (abstract ở lớp Animal) / Movement
    feed(): string;          // Hành vi ăn / Feeding behavior
}

export interface FeedingBehavior {
    feed(): string;
}

// ==============================================
// Abstract class: Animal
// ==============================================

export abstract class Animal implements IAnimal, FeedingBehavior {
    public name: string;
    public category: string;

    // Đóng gói / Encapsulation
    private _age: number;        // yêu cầu đóng gói age
    private _foodType: string;   // loại thức ăn / food type
    private _baseSound: string;  // âm thanh mặc định / default sound

    protected constructor(
        name: string,
        age: number,
        category: string,
        foodType: string,
        baseSound: string
    ) {
        this.name = name;
        this.category = category;
        this._age = 0; // set by setter for validation
        this.setAge(age);
        this._foodType = foodType;
        this._baseSound = baseSound;
    }

    // Getter/Setter với kiểm tra hợp lệ / with validation
    public get age(): number {
        return this._age;
    }

    public setAge(newAge: number): void {
        if (!Number.isFinite(newAge) || newAge < 0) {
            throw new Error(`Invalid age for ${this.name}. Age must be >= 0.`);
        }
        this._age = Math.floor(newAge);
    }

    public get foodType(): string {
        return this._foodType;
    }

    public setFoodType(ft: string): void {
        if (!ft || !ft.trim()) {
            throw new Error("Food type cannot be empty.");
        }
        this._foodType = ft.trim();
    }

    // Mặc định: âm thanh đọc từ _baseSound, lớp con có thể override
    // Default sound uses _baseSound; subclasses may override
    public sound(): string {
        return `${this.name} ${this._baseSound}`;
    }

    public getDetails(): string {
        return `Tên: ${this.name}, Tuổi: ${this.age}, Thể loại: ${this.category}, Thức ăn: ${this.foodType}`;
    }

    // Lớp con phải cài đặt / Subclasses must implement
    public abstract move(): string;

    // Hành vi ăn cơ bản, có thể override / Base feed behavior, overrideable
    public feed(): string {
        return `${this.name} đang ăn (${this.foodType}).`;
    }
}

// ==============================================
// Subclasses
// ==============================================

// Mammal: thú có vú - chạy
export class Mammal extends Animal {
    private _furColor: string;

    constructor(
        name: string,
        age: number,
        furColor: string,
    ) {
        super(name, age, "Thú có vú", "ăn tạp/ăn thịt/ăn cỏ", "kêu (mammal)");
        this._furColor = furColor;
    }

    public get furColor(): string {
        return this._furColor;
    }

    public setFurColor(color: string): void {
        if (!color || !color.trim()) {
            throw new Error("Fur color cannot be empty.");
        }
        this._furColor = color.trim();
    }

    public override move(): string {
        return `${this.name} đang chạy.`;
    }

    public override getDetails(): string {
        return super.getDetails() + `, Màu lông: ${this._furColor}`;
    }

    public override sound(): string {
        // Ví dụ: thay vì "kêu", thêm đặc trưng thú có vú
        return `${this.name} gầm gừ/sủa/meo... (âm thanh thú có vú)`;
    }

    public override feed(): string {
        return `${this.name} ăn theo chế độ của thú có vú (${this.foodType}).`;
    }
}

// Bird: chim - bay
export class Bird extends Animal {
    private _wingSpan: number; // sải cánh (cm)

    constructor(
        name: string,
        age: number,
        wingSpan: number
    ) {
        super(name, age, "Chim", "ăn côn trùng/hạt/quả", "hót líu lo");
        this._wingSpan = 0;
        this.setWingSpan(wingSpan);
    }

    public get wingSpan(): number {
        return this._wingSpan;
    }

    public setWingSpan(ws: number): void {
        if (!Number.isFinite(ws) || ws <= 0) {
            throw new Error("Wing span must be > 0.");
        }
        this._wingSpan = Math.round(ws);
    }

    public override move(): string {
        return `${this.name} đang bay với sải cánh ${this._wingSpan} cm.`;
    }

    public override sound(): string {
        return `${this.name} hót/chíp chíp.`;
    }

    public override getDetails(): string {
        return super.getDetails() + `, Sải cánh: ${this._wingSpan} cm`;
    }

    public override feed(): string {
        return `${this.name} đang mổ thức ăn (${this.foodType}).`;
    }
}

// Reptile: bò sát - bò
export class Reptile extends Animal {
    private _venomous: boolean;

    constructor(
        name: string,
        age: number,
        venomous: boolean
    ) {
        super(name, age, "Bò sát", "ăn thịt", "khè khè");
        this._venomous = !!venomous;
    }

    public get venomous(): boolean {
        return this._venomous;
    }

    public setVenomous(v: boolean): void {
        this._venomous = !!v;
    }

    public override move(): string {
        return `${this.name} đang bò.`;
    }

    public override sound(): string {
        return `${this.name} phát ra tiếng khè (reptile).`;
    }

    public override getDetails(): string {
        return super.getDetails() + `, Có độc: ${this._venomous ? "Có" : "Không"}`;
    }

    public override feed(): string {
        return `${this.name} nuốt mồi (${this.foodType}).`;
    }
}

// ==============================================
// Zookeeper
// ==============================================

type HealthStatus = "tốt" | "bình thường" | "cần kiểm tra";

interface CareRecord {
    lastCareAt?: Date;
    lastFedAt?: Date;
    health: HealthStatus;
    notes: string[];
}

export class Zookeeper {
    private careMap: Map<Animal, CareRecord> = new Map();

    private ensureRecord(animal: Animal): CareRecord {
        if (!this.careMap.has(animal)) {
            this.careMap.set(animal, { health: "bình thường", notes: [] });
        }
        // non-null assertion is safe here because we just set it
        return this.careMap.get(animal)!;
    }

    public careForAnimal(animal: Animal, note?: string): string {
        const rec = this.ensureRecord(animal);
        rec.lastCareAt = new Date();
        if (note && note.trim()) rec.notes.push(`Care: ${note.trim()}`);
        // Ví dụ cập nhật sức khoẻ / sample logic:
        rec.health = "tốt";
        return `Đã chăm sóc ${animal.name} lúc ${rec.lastCareAt.toLocaleString()}.`;
    }

    public feedAnimal(animal: Animal, note?: string): string {
        const rec = this.ensureRecord(animal);
        rec.lastFedAt = new Date();
        if (note && note.trim()) rec.notes.push(`Feed: ${note.trim()}`);
        const msg = animal.feed();
        return `${msg} (lúc ${rec.lastFedAt.toLocaleString()}).`;
    }

    public report(animal: Animal): string {
        const rec = this.ensureRecord(animal);
        const careTime = rec.lastCareAt ? rec.lastCareAt.toLocaleString() : "chưa có";
        const fedTime = rec.lastFedAt ? rec.lastFedAt.toLocaleString() : "chưa có";
        const notes = rec.notes.length ? rec.notes.join(" | ") : "không có";
        return [
            "===== BÁO CÁO ĐỘNG VẬT =====",
            animal.getDetails(),
            `Âm thanh: ${animal.sound()}`,
            `Di chuyển: ${animal.move()}`,
            `Sức khỏe: ${rec.health}`,
            `Lần chăm sóc gần nhất: ${careTime}`,
            `Lần cho ăn gần nhất: ${fedTime}`,
            `Ghi chú: ${notes}`,
            "============================="
        ].join("\n");
    }
}

// ==============================================
// Demo Polymorphism
// ==============================================

function demo() {
    const tiger = new Mammal("Hổ Bengal", 5, "vàng đen");
    tiger.setFoodType("ăn thịt");
    const eagle = new Bird("Đại bàng", 3, 220);
    eagle.setFoodType("ăn thịt/ăn cá");
    const cobra = new Reptile("Hổ mang chúa", 4, true);
    cobra.setFoodType("ăn thịt (chuột, ếch, rắn)");

    const animals: Animal[] = [tiger, eagle, cobra];

    console.log("== ĐA HÌNH: Gọi move() & sound() trên cùng interface ==");
    for (const a of animals) {
        console.log(a.move());
        console.log(a.sound());
    }

    const keeper = new Zookeeper();
    console.log(keeper.careForAnimal(tiger, "tắm và chải lông"));
    console.log(keeper.feedAnimal(tiger, "thịt bò 2kg"));
    console.log(keeper.feedAnimal(eagle, "cá tươi 1kg"));
    console.log(keeper.careForAnimal(cobra, "kiểm tra răng nanh"));

    console.log(keeper.report(tiger));
    console.log(keeper.report(eagle));
    console.log(keeper.report(cobra));
}


demo();
