 // 1. Enum: Ride Types and Ride Status
enum RideType {
  CAR = "Car",
  BIKE = "Bike",
  AUTO = "Auto"
}

enum RideStatus {
  BOOKED = "Booked",
  PICKED = "Picked",
  COMPLETED = "Completed"
}

// 2. Interface: Ride structure
interface Ride {
  id: number;
  user: string;
  type: RideType;
  status: RideStatus;
}

// 3. Type Alias
type RideList = Ride[];

// 4. Class to manage rides
class RideBookingSystem {
  private rides: RideList = [];
  private nextId: number = 1;

  // Add new ride
  public bookRide(user: string, type: RideType): void {
    const newRide: Ride = {
      id: this.nextId++,
      user,
      type,
      status: RideStatus.BOOKED
    };
    this.rides.push(newRide);
    console.log(`Ride booked for ${user} in a ${type}`);
  }

  // Update ride status
  public updateRideStatus(id: number, status: RideStatus): void {
    const ride = this.rides.find(r => r.id === id);
    if (ride) {
      ride.status = status;
      console.log(`Ride ${id} status updated to ${status}`);
    } else {
      console.log(`Ride with ID ${id} not found.`);
    }
  }

  // Show all rides
  public listRides(): void {
    console.log("\nAll Rides:");
    this.rides.forEach(ride => {
      console.log(`[${ride.id}] ${ride.user} - ${ride.type} - ${ride.status}`);
    });
  }
}

// 5. Function to run demo
function runRideBookingDemo(): void {
  const system = new RideBookingSystem();

  system.bookRide("Amit", RideType.CAR);
  system.bookRide("Neha", RideType.BIKE);
  system.bookRide("Raj", RideType.AUTO);

  system.updateRideStatus(2, RideStatus.PICKED);
  system.updateRideStatus(1, RideStatus.COMPLETED);

  system.listRides();
}

// 6. Run
runRideBookingDemo();
