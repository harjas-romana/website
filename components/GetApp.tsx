import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Registeration Fee</h2>
          <p className="regular-16 text-gray-10">ICCVIA 2025</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="Register Now"
              icon="/registration-1.png"
              variant="btn_dark_blue"
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
  <table style={{
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '10px',
    overflow: 'hidden'
  }}>
    <tbody>
      <tr style={{
        backgroundColor: 'darkGray',
        borderRadius: '10px 10px 0 0',
        color: '#000'
      }}>
        <th style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderRadius: '10px 0 0 10px',
          color: '#000'
        }}>Category</th>
        <th style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderRadius: '0 10px 10px 0',
          color: '#000'
        }}>Fees</th>
      </tr>
      <tr style={{
        backgroundColor: '#f0f0f0',
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: '1px'
      }}>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'solid',
          borderWidth: '1px',
          color: '#000'
        }}>Non-IEEE Professional</td>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'solid',
          borderWidth: '1px',
          color: '#000'
        }}>INR 8000</td>
      </tr>
      <tr style={{
        backgroundColor: '#fff',
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: '1px'
      }}>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'solid',
          borderWidth: '1px',
          color: '#000'
        }}>IEEE Professional Members</td>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'solid',
          borderWidth: '1px',
          color: '#000'
        }}>INR 7000</td>
      </tr>
      <tr style={{
        backgroundColor: '#f0f0f0',
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: '1px'
      }}>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'solid',
          borderWidth: '1px',
          color: '#000'
        }}>Non-IEEE Students (Student Must Be First Author)</td>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'solid',
          borderWidth: '1px',
          color: '#000'
        }}>INR 7000</td>
      </tr>
      <tr style={{
        backgroundColor: '#fff',
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: '1px'
      }}>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'solid',
          borderWidth: '1px',
          color: '#000'
        }}>IEEE Student Members (Student Must Be First Author)</td>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'solid',
          borderWidth: '1px',
          color: '#000'
        }}>INR 6000</td>
      </tr>
      <tr style={{
        backgroundColor: '#f0f0f0',
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: '1px'
      }}>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'solid',
          borderWidth: '1px',
          color: '#000'
        }}>Industry Participants</td>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'solid',
          borderWidth: '1px',
          color: '#000'
        }}>INR 9000</td>
      </tr>
      <tr style={{
        backgroundColor: '#fff',
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: '1px'
      }}>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'solid',
          borderWidth: '1px',
          color: '#000'
        }}>Non-IEEE Foreign Participants</td>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'solid',
         borderWidth: '1px',
          color: '#000'
        }}>USD 250</td>
      </tr>
      <tr style={{
        backgroundColor: '#f0f0f0',
        borderColor: '#000',
        borderStyle: 'olid',
        borderWidth: '1px'
      }}>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'olid',
          borderWidth: '1px',
          color: '#000'
        }}>IEEE Foreign Participants</td>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'olid',
          borderWidth: '1px',
          color: '#000'
        }}>USD 200</td>
      </tr>
      <tr style={{
        backgroundColor: '#fff',
        borderColor: '#000',
        borderStyle: 'olid',
        borderWidth: '1px'
      }}>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'olid',
          borderWidth: '1px',
          color: '#000'
        }}>Participants from Industries Abroad</td>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'olid',
          borderWidth: '1px',
          color: '#000'
        }}>USD 300</td>
      </tr>
      <tr style={{
        backgroundColor: '#f0f0f0',
        borderColor: '#000',
        borderStyle: 'olid',
        borderWidth: '1px'
      }}>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'olid',
          borderWidth: '1px',
          color: '#000'
        }}>Workshop (only for participants)</td>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'olid',
          borderWidth: '1px',
          color: '#000'
        }}>INR 500</td>
      </tr>
      <tr style={{
        backgroundColor: '#fff',
        borderColor: '#000',
        borderStyle: 'olid',
        borderWidth: '1px'
      }}>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'olid',
          borderWidth: '1px',
          color: '#000'
        }}>Attending the conference as a participant</td>
        <td style={{
          padding: '10px',
          borderColor: '#000',
          borderStyle: 'olid',
          borderWidth: '1px',
          color: '#000'
        }}>INR 2000</td>
      </tr>
    </tbody>
  </table>
</div>
                </div>
                </section>
  )
}

export default GetApp