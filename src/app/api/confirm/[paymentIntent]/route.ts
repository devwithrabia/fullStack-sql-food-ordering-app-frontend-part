import { prisma } from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'

export const PUT = async (req: NextRequest, { params }: { params: { paymentIntent: string } }) => {
  const { paymentIntent } = params

  try {
    await prisma.order.update({
      where: {
        intent_id: paymentIntent
      },

      data: {
        status: 'Being prepared'
      }
    })

    return new NextResponse(JSON.stringify({ message: 'order has been updated' }), { status: 200 })
  } catch (err) {
    console.log(err)

    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 })
  }
}
