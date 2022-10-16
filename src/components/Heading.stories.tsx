import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'components/Heading',
    component: Heading,
    args: {
        children: 'Loren ipsun.',  
        size: 'md', 
    },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    },
    argTypes: {
        size: {
            options: ['sm','md','lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with H1</h1>
        )
    },
    argTypes:{
        children: {
            table: {
                disable: true,
            }    
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}