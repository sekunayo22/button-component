import { Button } from ".";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {fn} from "storybook/test"

const meta = {
    title: "Components/Button",
    component: Button,
    args: {
       handleClick: fn()
    },
    tags: ["autodocs"]
} satisfies Meta<typeof Button>

export default meta;

export type Story = StoryObj<typeof meta>;

export const PrimaryButton : Story = {
    args: {
        label: "Click me",
        variant: "primary",
        type: "button"
    }
}

export const SecondaryButton : Story = {
    args: {
        ...PrimaryButton.args,
        variant: "secondary",
    }
}

export const OutlinedButton : Story = {
    args: {
        ...PrimaryButton.args,
        variant: "outlined",
    }
}

export const LoadingButton : Story = {
    args: {
        ...PrimaryButton.args,
        loading: true
    }
}

export const DisabledButton : Story = {
    args: {
        ...PrimaryButton.args,
        disabled: true
    }
}