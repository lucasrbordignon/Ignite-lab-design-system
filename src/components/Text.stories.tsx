import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './text'

export default {
    title: 'components/Text',
    component: Text,
    args: {
        children: 'Loren ipsun.',  
        size: 'md', 
    },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
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

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Text with P tag</p>
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
