"""Original DE-SCHOOL math clips. Development only; ManimCE 0.20.1.
No networking, no external assets, no TeX, no plugins, no recorded voices.
See media-manifest.json for exact curriculum claims and caption transcript.
"""
from manim import (Scene, VGroup, Text, Rectangle, Line, Circle, Arc, DashedLine,
                   FadeIn, FadeOut, Create, Transform, ValueTracker, always_redraw,
                   UP, DOWN, LEFT, RIGHT, ORIGIN, DEGREES, PI, smooth, config)
import numpy as np

PAPER = "#f7f5f0"
INK = "#292c29"
GREEN = "#467060"
SOFT = "#edf3ec"
OLIVE = "#524e44"
PURPLE = "#73618b"
GRAY = "#d7dad3"
FONT = "Hiragino Sans"


def text(value, size=34, color=INK):
    obj = Text(value, font=FONT, font_size=size, color=color)
    if obj.width > 12.3:
        obj.scale_to_fit_width(12.3)
    return obj


def region(obj, left, right, bottom, top, name):
    bounds = (float(obj.get_left()[0]), float(obj.get_right()[0]),
              float(obj.get_bottom()[1]), float(obj.get_top()[1]))
    assert bounds[0] >= left and bounds[1] <= right and bounds[2] >= bottom and bounds[3] <= top, (name, bounds)
    return obj


def separated(a, b, name):
    assert (a.get_right()[0] < b.get_left()[0] or b.get_right()[0] < a.get_left()[0]
            or a.get_top()[1] < b.get_bottom()[1] or b.get_top()[1] < a.get_bottom()[1]), name


class Lesson(Scene):
    def setup(self):
        self.camera.background_color = PAPER
        self.heading = None
        self.caption = None
        self.equation = None

    def title(self, value):
        self.heading = text(value, 39).move_to([0, 3.35, 0])
        self.add(region(self.heading, -6.3, 6.3, 2.95, 3.8, "heading"))
        self.add(Line([-6.1, 2.85, 0], [6.1, 2.85, 0], color=GRAY, stroke_width=2))

    def say(self, value):
        obj = text(value, 31).move_to([0, -3.15, 0])
        if self.caption is not None:
            self.remove(self.caption)
        region(obj, -6.3, 6.3, -3.8, -2.72, "caption")
        self.caption = obj
        self.add(obj)

    def equation_at(self, value):
        obj = region(text(value, 40, GREEN).move_to([0, -2.2, 0]), -6.3, 6.3, -2.55, -1.85, 'equation')
        if self.equation is None:
            self.add(obj)
            self.equation = obj
        else:
            self.play(FadeOut(self.equation), run_time=0.2)
            self.equation = obj
            self.play(FadeIn(obj), run_time=0.3)


class FractionLesson(Lesson):
    def construct(self):
        self.title("1を分数に直してひく")
        self.say("同じ大きさの1を、それぞれ5等分する。")
        cells = VGroup()
        for row in range(2):
            for col in range(5):
                cell = Rectangle(width=0.94, height=0.94, stroke_color=OLIVE,
                                 stroke_width=2, fill_color=SOFT, fill_opacity=1)
                cell.move_to([-4.8 + col * 0.94 + row * 5.7, 0.75, 0])
                cells.add(cell)
        self.add(cells)
        self.add(text("1", 32).move_to([-2.92, 1.65, 0]), text("1", 32).move_to([2.78, 1.65, 0]))
        self.play(*[cells[i].animate.set_fill(GREEN, 1) for i in range(5)], run_time=1.4)
        self.equation_at("1 = 5/5")
        self.wait(3)
        self.say("1と1/5は、1/5が6こ。")
        self.play(cells[5].animate.set_fill(GREEN, 1), run_time=1)
        self.equation_at("1 と 1/5 = 6/5")
        self.wait(3)
        self.say("6こから3こをひく。\n一つ分の大きさは1/5のまま。")
        taken = VGroup(*[cells[i].copy().set_fill(PURPLE, 1) for i in (3, 4, 5)])
        self.add(taken)
        for i in (3, 4, 5):
            cells[i].set_fill(SOFT, 1)
        targets = [[1.7 + i * .94, -.9, 0] for i in range(3)]
        self.play(*[taken[i].animate.move_to(targets[i]) for i in range(3)], run_time=2)
        self.add(text("ひいた3こ", 27, PURPLE).move_to([-1, -.9, 0]))
        self.equation_at("6/5 − 3/5 = 3/5")
        self.wait(3)
        self.say("残るのは3こ。答えは3/5。\n3/5 + 3/5 = 6/5で確かめる。")
        self.play(*[cells[i].animate.set_stroke(OLIVE, 4) for i in range(3)], run_time=1)
        self.wait(5)


class AreaLesson(Lesson):
    def construct(self):
        self.title("欠けた長方形の広さ")
        self.say("一つのマスは1 cm²。\nたて6こ、横8こで48こ。")
        cells = VGroup()
        for y in range(6):
            for x in range(8):
                c = Rectangle(width=.48, height=.48, stroke_color=PAPER,
                              stroke_width=2, fill_color=GREEN, fill_opacity=1)
                c.move_to([-3.6 + x*.48, -1.08 + y*.48, 0])
                cells.add(c)
        self.play(FadeIn(cells), run_time=1)
        self.add(text("8 cm", 31).move_to([-1.92, 2.08, 0]),
                 text("6 cm", 31).move_to([-4.75, .12, 0]))
        self.equation_at("6 × 8 = 48 cm²")
        self.wait(4)
        self.say("切り取る角は、たて2 cm、横3 cm。\n2 × 3 = 6 cm²。")
        cut = VGroup(*[cells[y*8+x] for y in (4,5) for x in (5,6,7)])
        self.play(cut.animate.set_fill(PURPLE,1), run_time=1)
        self.wait(2)
        self.play(cut.animate.shift(RIGHT*4.4), run_time=2)
        width_label = text("3 cm",27,PURPLE).next_to(cut, UP, buff=.2)
        height_label = text("2 cm",27,PURPLE).next_to(cut, RIGHT, buff=.25)
        for name, label in [('cut-width', width_label), ('cut-height', height_label)]:
            region(label, -6.3, 6.3, -1.65, 2.6, name)
            separated(label, cut, name)
        self.add(width_label, height_label)
        self.equation_at("切り取る部分：2 × 3 = 6 cm²")
        self.wait(3)
        self.say("全体の48 cm²から、6 cm²を1回ひく。")
        self.equation_at("48 − 6 = 42 cm²")
        self.wait(4)
        self.say("残った42このマスが42 cm²。\n長さのcmと、広さのcm²を分けよう。")
        self.add(text("42 cm²",37,GREEN).move_to([-1.9,.1,0]).add_background_rectangle(color=PAPER,opacity=.94,buff=.15))
        self.wait(4)


class AngleLesson(Lesson):
    def construct(self):
        self.title("250°の回転をたどる")
        self.say("右向きの辺を0°に合わせる。\n反時計回りに、まず半回転。")
        center = np.array([-1.4, .45, 0])
        radius = 1.6
        self.add(Circle(radius=radius,color=GRAY,stroke_width=2).move_to(center))
        for deg in range(0,360,10):
            v=np.array([np.cos(deg*DEGREES),np.sin(deg*DEGREES),0])
            self.add(Line(center+v*(radius-.08),center+v*(radius+.05),color=OLIVE,stroke_width=2))
        for deg,label in [(0,'0°'),(90,'90°'),(180,'180°'),(270,'270°')]:
            v=np.array([np.cos(deg*DEGREES),np.sin(deg*DEGREES),0])
            self.add(region(text(label,26).move_to(center+v*(radius+.35)), -6.3, 6.3, -1.65, 2.6, "angle-axis"))
        self.add(Line(center,center+RIGHT*radius,color=GRAY,stroke_width=5))
        theta=ValueTracker(0)
        ray=always_redraw(lambda:Line(center,center+radius*np.array([np.cos(theta.get_value()*DEGREES),np.sin(theta.get_value()*DEGREES),0]),color=GREEN,stroke_width=6))
        arc=always_redraw(lambda:Arc(radius=1.35,start_angle=0,angle=max(.00001,theta.get_value()*DEGREES),arc_center=center,color=GREEN,stroke_width=8))
        number=always_redraw(lambda:text(str(round(theta.get_value()))+'°',48,GREEN).move_to([3.5,.3,0]))
        self.add(arc,ray,number,Circle(radius=.06,fill_color=OLIVE,fill_opacity=1,color=OLIVE).move_to(center))
        self.play(theta.animate.set_value(180),run_time=3,rate_func=smooth)
        self.equation_at("半回転は 180°")
        self.wait(3)
        self.say("残りは250 − 180 = 70°。\n同じ向きへ、さらに70°回す。")
        self.play(theta.animate.set_value(250),run_time=2,rate_func=smooth)
        self.equation_at("180° + 70° = 250°")
        self.wait(4)
        self.say("反対側の小さい角は110°。\n今測った回転の250°とは区別する。")
        other=Arc(radius=.9,start_angle=250*DEGREES,angle=110*DEGREES,arc_center=center,color=PURPLE,stroke_width=5)
        self.play(Create(other),run_time=1)
        self.add(text("110°",27,PURPLE).move_to([center[0]+.8,center[1]-.9,0]))
        self.wait(4)
        self.say("一回転で360°。\n250°と110°を合わせると360°。")
        self.equation_at("250° + 110° = 360°")
        self.wait(4)


class ConnectedSquaresLesson(Lesson):
    def construct(self):
        self.title("正方形をつなぐと、棒は何本？")
        self.say("最初の正方形には4本。")
        x0=-4.8
        size=1.7
        left=Line([x0,-.6,0],[x0,1.1,0],color=GREEN,stroke_width=9)
        groups=[]
        for i in range(5):
            x=x0+i*size
            groups.append(VGroup(Line([x,1.1,0],[x+size,1.1,0],color=GREEN,stroke_width=9),
                                 Line([x,-.6,0],[x+size,-.6,0],color=GREEN,stroke_width=9),
                                 Line([x+size,-.6,0],[x+size,1.1,0],color=GREEN,stroke_width=9)))
        self.play(Create(left),*[Create(m) for m in groups[0]],run_time=1.3)
        self.equation_at("1こ → 4本")
        self.wait(3)
        self.say("となりと1辺をいっしょに使う。\n次の正方形に足すのは3本。")
        self.play(groups[0][2].animate.set_color(PURPLE),run_time=.5)
        self.play(*[Create(m) for m in groups[1]],run_time=1.3)
        self.equation_at("2こ → 4 + 3 = 7本")
        self.wait(3)
        self.say("もう1こ増えるたびに、3本ずつ足す。")
        for i in range(2,5):
            self.play(*[Create(m) for m in groups[i]],run_time=1)
            self.equation_at(str(i+1)+"こ → "+str(4+3*i)+"本")
            self.wait(.7)
        self.wait(2)
        self.say("5こなら、最初の4本と追加4回。\n共有する辺は1回だけ数える。")
        self.equation_at("4 + 3 × 4 = 16本")
        self.wait(3)
        self.say("左端の1本と、3本ずつの5組でも同じ。")
        self.play(left.animate.set_color(PURPLE),groups[0][2].animate.set_color(GREEN),run_time=.5)
        self.equation_at("1 + 3 × 5 = 16本")
        self.wait(4)
