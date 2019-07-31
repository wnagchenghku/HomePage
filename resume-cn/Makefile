resume.pdf: resume.tex */*.tex */*/*.tex awesome-cv.cls
	xelatex resume.tex

cover_letter.pdf: cover_letter.tex
	xelatex cover_letter.tex

clean: 
	-rm *.aux
	-rm *.log
	-rm *.pdf
	-rm *.toc
	-rm *.idx
	-rm *.out
	-rm *.bbl
	-rm *.lof
	-rm *.lot
	-rm *.ilg
	-rm *.blg
	-rm *.mtc*
	-rm *.nlo
	-rm *.fdb_latexmk
	-rm *.fls
