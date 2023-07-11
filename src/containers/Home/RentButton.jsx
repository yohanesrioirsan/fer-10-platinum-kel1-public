import { useRouter } from "next/router";
import React from "react";
import { Button } from "react-bootstrap";

function RentButton() {
    const router = useRouter();
    return (
        <div onClick={() => router.push("/search")}>
            <Button type="button" className="btn btn-success">
                Mulai Sewa Mobil
            </Button>
        </div>
    );
}

export default RentButton;
